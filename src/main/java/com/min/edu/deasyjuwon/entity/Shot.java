
// 작업물 게시글 관리
package com.min.edu.deasyjuwon.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity                     // 이 클래스가 DB 테이블임을 JPA에게 알려줌
@Table(name = "shots")      // 테이블 이름을 "shots"로 지정
@Getter @Setter             // 모든 필드의 get/set 메서드 자동 생성
@NoArgsConstructor          // 기본 생성자 자동 생성
@AllArgsConstructor         // 모든 필드 받는 생성자 자동 생성
@Builder                    // Builder 패턴으로 객체 생성 가능하게 해줌
public class Shot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 자동증가 (1,2,3...)
    private Long id;

    @Column(nullable = false) // NOT NULL
    private Long userId;      // 이 shot을 올린 디자이너 id

    @Column(nullable = false) // NOT NULL
    private String title;     // shot 제목

    @Column(columnDefinition = "TEXT") // 긴 글 저장 가능
    private String description;        // shot 설명

    @Column(nullable = false) // NOT NULL
    private String category;  // UI/UX, 일러스트 등 분류

    private int viewCount;    // 조회수
    private int likeCount;    // 좋아요수

    @CreationTimestamp
    private LocalDateTime createdAt;  // 생성 시간 자동 저장

    @UpdateTimestamp
    private LocalDateTime updatedAt;  // 수정 시간 자동 저장
}
