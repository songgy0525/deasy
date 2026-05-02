package com.min.edu.auth;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "profiles")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String snsGithub;
    private String snsInstagram;
    private String snsWebsite;
    private String skillTags; // 쉼표로 구분하기 "피그마, 일러, 포토샵, 등..
}
