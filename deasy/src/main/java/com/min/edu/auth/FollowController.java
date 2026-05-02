package com.min.edu.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175"})
public class FollowController {

    private final FollowService followService;

    @PostMapping("/{followeeId}/follow")
    public ResponseEntity<String> follow(
            @PathVariable Long followeeId,
            @RequestParam Long followerId) {
        followService.follow(followerId, followeeId);
        return ResponseEntity.ok("팔로우 성공");
    }

    @DeleteMapping("/{followeeId}/follow")
    public ResponseEntity<String> unfollow(
            @PathVariable Long followeeId,
            @RequestParam Long followerId) {
        followService.unfollow(followerId, followeeId);
        return ResponseEntity.ok("언팔로우 성공");
    }
}