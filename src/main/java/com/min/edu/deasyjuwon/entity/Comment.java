
// shot(작업물)에 달리는 댓글 관리
package com.min.edu.deasyjuwon.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment {

    @Id // 이 필드가 pk (primary key 고유번호) 임을 JPA에게 알림
    @GeneratedValue(strategy = GenerationType.IDENTITY) // pk자동증가
    private Long Id; // 댓글작성

    @Column(nullable = false)
    private Long userId;      // 댓글 작성자 id

    @Column(nullable = false)
    private  Long shotId; // 어떤 shot의 댓글인지

    @Column(nullable = false, columnDefinition = "TEXT") //내용없는 댓글 막기, 긴 글 저장
    private String content; //댓글내용

    @CreationTimestamp
    private LocalDateTime createdAt;
    // 댓글 처음 저장될 때 시간 자동으로 넣어줄 때 필요

    @UpdateTimestamp
    private LocalDateTime updateAt;
    // 댓글 수정될 때마다 시간 자동으로 업데이트할 때 필요



}
