package com.min.edu.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        String email = oAuth2User.getAttribute("email");
        String nickname = oAuth2User.getAttribute("name");
        String avatarUrl = oAuth2User.getAttribute("picture");

        boolean isNewUser = !userRepository.existsByEmail(email);

        User user = userRepository.findByEmail(email)
                .orElseGet(() -> userRepository.save(User.builder()
                        .email(email)
                        .nickname(nickname)
                        .avatarUrl(avatarUrl)
                        .password("")
                        .role(User.Role.DESIGNER) // 임시, role 선택 후 변경
                        .provider(User.Provider.GOOGLE)
                        .build()));

        String encodedNickname = URLEncoder.encode(user.getNickname(), StandardCharsets.UTF_8);

        if (isNewUser) {
            // 신규 유저 → role 선택 페이지로
            response.sendRedirect("http://localhost:5175/oauth-role?userId=" + user.getId()
                    + "&nickname=" + encodedNickname);
        } else {
            // 기존 유저 → 홈으로
            response.sendRedirect("http://localhost:5175?userId=" + user.getId()
                    + "&nickname=" + encodedNickname);
        }
    }
}
