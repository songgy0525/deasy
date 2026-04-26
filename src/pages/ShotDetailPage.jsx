/**
 * =============================================
 * 📌 담당: 주원 (게시판2 — Shot 관리)
 * =============================================
 * 연결할 API:
 *   GET    /api/shots/:shotId          → Shot 상세 조회 (조회수 +1)
 *   GET    /api/shots/:shotId/files    → Shot 이미지/영상 목록
 *   POST   /api/shots/:shotId/like     → 좋아요
 *   DELETE /api/shots/:shotId/like     → 좋아요 취소
 *   GET    /api/shots/:shotId/comments → 댓글 목록 (있으면)
 *   POST   /api/chat/rooms            → "의뢰하기" 클릭 시 ChatRoom 생성
 *
 * 연결 후 할 것:
 *   - useParams()로 shotId 추출
 *   - ShotFile 목록을 이미지 슬라이더로 표시
 *   - 좋아요 토글 상태 관리
 *   - "Message" 클릭 시 ChatRoom 생성 후 /chat/:roomId로 이동
 * =============================================
 */

import { Link } from "react-router-dom";
import "./ShotDetailPage.css";

export default function ShotDetailPage() {
  return (
    <div className="shot-detail">
      <div className="shot-detail-inner">
        <div className="shot-main">
          {/* TODO: ShotFile 이미지 슬라이더로 교체 */}
          <div className="shot-image" style={{ background: "#e8f5ef" }}>
            <div style={{ width: 200, height: 200, background: "#2D8659", borderRadius: 8, opacity: 0.8 }} />
          </div>

          <div className="shot-meta">
            {/* TODO: shot.title */}
            <h1>Shot title goes here</h1>

            <div className="shot-author-row">
              {/* TODO: user.avatar_url */}
              <div className="avatar" />
              <div>
                {/* TODO: user.nickname */}
                <p className="author-name">Designer Name</p>
                <p className="author-handle">@handle</p>
              </div>
              {/* TODO: POST /api/users/:userId/follow (경용 파트) */}
              <button className="follow-btn">Follow</button>
            </div>

            <div className="shot-stats">
              {/* TODO: shot.like_count, shot.view_count */}
              <span>♥ 284</span>
              <span>◎ 1,204</span>
            </div>

            {/* TODO: shot.description */}
            <p className="shot-desc">
              Shot description goes here. Tools used, design intent, process notes.
            </p>

            {/* TODO: shot.tags 배열 렌더링 */}
            <div className="shot-tags">
              {["Web Design", "Branding", "UI/UX"].map(t => (
                <span key={t} className="shot-tag">{t}</span>
              ))}
            </div>

            {/* TODO: POST /api/chat/rooms → { designer_id, shot_id } 전송 후 /chat/:roomId 이동 */}
            <button className="contact-btn">💬 Message to hire</button>
          </div>
        </div>

        {/* 댓글 — 필요 시 별도 Entity 추가 논의 */}
        <div className="comments">
          <h3>Comments (12)</h3>
          {[1,2,3].map(i => (
            <div key={i} className="comment">
              <div className="avatar sm" />
              <div>
                <p className="comment-author">user_{i} <span>2h ago</span></p>
                <p className="comment-text">Great work! The color palette is really impressive.</p>
              </div>
            </div>
          ))}
          <div className="comment-input-row">
            <div className="avatar sm" />
            <input placeholder="Leave a comment..." />
          </div>
        </div>
      </div>
    </div>
  );
}
