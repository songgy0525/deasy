package com.min.edu.auth;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProfileRequest {
    private String snsGithub;
    private String snsInstagram;
    private String snsWebsite;
    private String skillTags;
}
