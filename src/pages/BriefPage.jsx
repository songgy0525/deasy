/**
 * =============================================
 * 📌 담당: 경용 (게시판4 — 채용 / 프리랜서)
 * =============================================
 * 연결할 API:
 *   GET  /api/briefs               → 의뢰 목록 (status=OPEN)
 *   POST /api/briefs               → 의뢰 등록 (클라이언트만)
 *   GET  /api/briefs/:briefId      → 의뢰 상세
 *   POST /api/briefs/:briefId/proposals → 제안서 제출 (디자이너만)
 *   GET  /api/briefs/:briefId/proposals → 제안서 목록 (클라이언트만)
 *   PATCH /api/proposals/:proposalId    → 제안서 수락/거절
 *
 * 연결 후 할 것:
 *   - role이 CLIENT면 "Post a Brief" 버튼 표시
 *   - role이 DESIGNER면 "Submit Proposal" 버튼 표시
 *   - 제안서 수락 시 자동 ChatRoom 생성 (주원 파트와 연계)
 * =============================================
 */

import "./BriefPage.css";

const BRIEFS = [
  { id: 1, title: "Logo & Branding for Startup", client: "Client A", budget: "$500 – $1,000", deadline: "2 weeks" },
  { id: 2, title: "Shopping App UI Design", client: "Client B", budget: "$2,000 – $4,000", deadline: "1 month" },
  { id: 3, title: "SNS Content Template Pack", client: "Client C", budget: "$300 – $600", deadline: "1 week" },
  { id: 4, title: "Corporate Website Redesign", client: "Client D", budget: "$3,000 – $5,000", deadline: "6 weeks" },
];

export default function BriefPage() {
  return (
    <div className="brief-page">
      <div className="brief-inner">
        <div className="brief-header">
          <div>
            <h2>Project Briefs</h2>
            <p>Submit proposals to open projects</p>
          </div>
          {/* TODO: role === 'CLIENT'일 때만 노출 */}
          {/* TODO: onClick → POST /api/briefs 모달 */}
          <button className="post-brief-btn">+ Post a Brief</button>
        </div>

        {/* TODO: GET /api/briefs 결과로 교체 */}
        <div className="brief-list">
          {BRIEFS.map(b => (
            <div key={b.id} className="brief-card">
              <div className="brief-status">OPEN</div>
              <h3>{b.title}</h3>
              <p className="brief-client">by {b.client}</p>
              <div className="brief-meta">
                <span>💰 {b.budget}</span>
                <span>📅 {b.deadline}</span>
              </div>
              {/* TODO: role === 'DESIGNER'일 때만 노출 */}
              {/* TODO: onClick → POST /api/briefs/:briefId/proposals 모달 */}
              <button className="propose-btn">Submit Proposal</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
