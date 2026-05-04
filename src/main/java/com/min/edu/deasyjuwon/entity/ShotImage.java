// 작업물 게시글에 이미지 여러장 올리기

package com.min.edu.deasyjuwon.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity                      // 이 클래스가 DB 테이블임을 JPA에게 알려줌
@Table(name = "shot_images") // 테이블 이름을 "shot_images"로 지정
@Getter @Setter              // 모든 필드의 get/set 메서드 자동 생성
@NoArgsConstructor           // 기본 생성자 자동 생성 (JPA 필수)
@AllArgsConstructor          // 모든 필드 받는 생성자 자동 생성
@Builder                     // Builder 패턴으로 객체 생성 가능하게 해줌
public class ShotImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 자동증가
    private Long id;

    @Column(nullable = false) // NOT NULL
    private Long shotId;      // 어떤 shot의 이미지인지

    @Column(nullable = false) // NOT NULL
    private String imageUrl;  // 이미지 저장 경로

    private int orderIndex;   // 이미지 순서 (여러장일 때)

    @CreationTimestamp
    private LocalDateTime createdAt; // 생성 시간 자동 저장
}
