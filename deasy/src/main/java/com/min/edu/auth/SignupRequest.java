package com.min.edu.auth;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignupRequest {
    private String email;
    private String password;
    private String nickname;
    private String role; // 디자이너 / 클라이언트
}
