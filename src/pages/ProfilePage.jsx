/**
 * =============================================
 * 📌 담당: 경용 (게시판1 — 회원 관리 Auth)
 * =============================================
 * 연결할 API:
 *   GET  /api/users/:userId        → 유저 프로필 조회
 *   GET  /api/users/:userId/shots  → 유저 작업 목록 (주원 파트와 연계)
 *   POST /api/users/:userId/follow → 팔로우
 *   DELETE /api/users/:userId/follow → 언팔로우
 *   PUT  /api/users/me/profile     → 프로필 수정 (본인만)
 *
 * 연결 후 할 것:
 *   - useParams()로 userId 추출
 *   - 본인 프로필이면 수정 버튼 표시
 *   - 팔로우 상태 토글 처리
 *   - 탭 전환 시 해당 API 호출
 * =============================================
 */

import { Link } from "react-router-dom";
import "./ProfilePage.css";

const MOCK_SHOTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  color: ["#2D8659","#3B82F6","#8B5CF6","#F59E0B","#EF4444","#06B6D4"][i],
  lightColor: ["#e8f5ef","#eff6ff","#f3eeff","#fffbeb","#fef2f2","#ecfeff"][i],
}));

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-cover" />
      <div className="profile-inner">
        <div className="profile-header">
          {/* TODO: avatar_url → <img> 로 교체 */}
          <div className="profile-avatar" />
          <div className="profile-info">
            {/* TODO: user.nickname */}
            <h2>Designer Name</h2>
            {/* TODO: user.email or handle */}
            <p className="profile-handle">@designer_handle</p>
            {/* TODO: user.bio */}
            <p className="profile-bio">UI/UX Designer · Branding · Seoul</p>
            <div className="profile-stats">
              {/* TODO: shots count, followers count, following count */}
              <span><strong>48</strong> shots</span>
              <span><strong>1.2k</strong> followers</span>
              <span><strong>320</strong> following</span>
            </div>
            {/* TODO: profile.skill_tags 배열 렌더링 */}
            <div className="profile-skills">
              {["Figma", "Illustrator", "Photoshop", "Webflow"].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="profile-actions">
            {/* TODO: 본인이면 "Edit profile", 타인이면 "Follow" */}
            {/* TODO: POST /api/users/:userId/follow */}
            <button className="follow-btn-lg">Follow</button>
            <Link to="/chat" className="chat-btn">💬 Message</Link>
          </div>
        </div>

        <div className="profile-tabs">
          {/* TODO: 탭 클릭 시 각각 다른 API 호출 */}
          <button className="tab-active">Work</button>
          <button>Liked</button>
          <button>Services</button>
        </div>

        {/* TODO: GET /api/users/:userId/shots 결과 렌더링 (주원 파트) */}
        <div className="profile-grid">
          {MOCK_SHOTS.map(s => (
            <Link to={`/shot/${s.id}`} key={s.id} className="profile-shot">
              <div className="profile-shot-thumb" style={{ background: s.lightColor }}>
                <div style={{ width: 60, height: 60, background: s.color, borderRadius: 6, opacity: 0.85 }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
