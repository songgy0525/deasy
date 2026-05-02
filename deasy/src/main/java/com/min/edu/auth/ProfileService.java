package com.min.edu.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;

    public Profile getProfile(Long userId) {
        return profileRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("프로필이 없습니다."));
    }

    public Profile updateProfile(Long userId, ProfileRequest request) {
        Profile profile = profileRepository.findByUserId(userId)
                .orElseGet(() -> {
                    User user = userRepository.findById(userId)
                            .orElseThrow(() -> new RuntimeException("유저가 없습니다."));
                    return Profile.builder().user(user).build();
                });

        profile.setSnsGithub(request.getSnsGithub());
        profile.setSnsInstagram(request.getSnsInstagram());
        profile.setSnsWebsite(request.getSnsWebsite());
        profile.setSkillTags(request.getSkillTags());

        return profileRepository.save(profile);
    }
}