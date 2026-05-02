package com.min.edu.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;

    public void follow(Long followerId, Long followeeId) {
        if(followRepository.existsByFollowerIdAndFolloweeId(followerId, followeeId)) {
            throw new RuntimeException("이미 팔로우 중입니다");
        }
        User follower = userRepository.findById(followerId)
                .orElseThrow(()-> new RuntimeException("유저가 없습니다."));
        User followee = userRepository.findById(followeeId)
                .orElseThrow(()-> new RuntimeException("유저가 없습니다."));
        followRepository.save(Follow.builder()
                .follower(follower)
                .followee(followee)
                .build());
    }

    public void unfollow(Long followerId, Long followeeId) {
        Follow follow = followRepository.findByFollowerIdAndFolloweeId(followerId, followeeId)
                .orElseThrow(() -> new RuntimeException("팔로우 중이 아닙니다."));
        followRepository.delete(follow);
    }

    public long getFollowerCount(Long userId) {
        return followRepository.countByFolloweeId(userId);
    }

    public long getFollowingCount(Long userId) {
        return followRepository.countByFollowerId(userId);
    }
}
