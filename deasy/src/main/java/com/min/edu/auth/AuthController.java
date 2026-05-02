package com.min.edu.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175"}) // 리액트 포트
public class AuthController {
    private final AuthService authService;

    // 회원가입 파트
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest request){
        authService.signup(request);
        return ResponseEntity.ok("회원가입 성공");
    }

    // 로그인 파트
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest request){
        User user = authService.login(request);
        return ResponseEntity.ok(user);
    }

    // OAuth 유저 role 설정
    @PatchMapping("/role")
    public ResponseEntity<User> updateRole(@RequestParam Long userId,
                                           @RequestParam String role) {
        return ResponseEntity.ok(authService.updateRole(userId, role));
    }
}
