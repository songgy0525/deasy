
// 게시물(shot) 좋아요 관리
package com.min.edu.deasyjuwon.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity                   // 이 클래스가 DB 테이블임을 JPA에게 알려줌
@Table(name = "likes")    // 테이블 이름을 "likes"로 지정
@Getter @Setter           // 모든 필드의 get/set 메서드 자동 생성
@NoArgsConstructor        // 기본 생성자 자동 생성 (JPA 필수)
@AllArgsConstructor       // 모든 필드 받는 생성자 자동 생성
@Builder                  // Builder 패턴으로 객체 생성 가능하게 해줌
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 자동증가
    private Long id;

    @Column(nullable = false) // NOT NULL -> 누가 눌렀는지 모르면 안돼 !!
    private Long userId;      // 좋아요 누른 유저 id

    @Column(nullable = false) // NOT NULL
    private Long shotId;      // 좋아요 눌린 shot id

    @CreationTimestamp
    private LocalDateTime createdAt; // 좋아요 누른 시간 자동 저장
}
