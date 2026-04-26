/**
 * =============================================
 * 📌 담당: 경용 (게시판4 — 채용 / 프리랜서)
 * =============================================
 * 연결할 API:
 *   GET  /api/jobs                 → 채용 공고 목록
 *   GET  /api/jobs/:jobId          → 채용 공고 상세
 *   POST /api/jobs/:jobId/apply    → 지원하기 (JobApplication)
 *   GET  /api/briefs               → 프로젝트 의뢰 목록
 *   GET  /api/packages             → 서비스 패키지 목록
 *
 * 연결 후 할 것:
 *   - 탭 전환 시 각각 다른 API 호출
 *   - 지원하기 클릭 시 resume_url 첨부 모달
 *   - 로그인 안 된 경우 로그인 페이지로 이동
 * =============================================
 */

import "./JobsPage.css";

const JOBS = [
  { id: 1, title: "UI/UX Designer", company: "Startup A", type: "Full-time", location: "Seoul", salary: "$60k – $90k" },
  { id: 2, title: "Brand Designer (Freelance)", company: "Agency B", type: "Contract", location: "Remote", salary: "Project-based" },
  { id: 3, title: "Product Designer", company: "Tech Startup C", type: "Full-time", location: "Pangyo", salary: "$70k – $100k" },
  { id: 4, title: "Motion Graphic Designer", company: "Content Co. D", type: "Contract", location: "Remote", salary: "$4k – $6k/mo" },
];

export default function JobsPage() {
  return (
    <div className="jobs-page">
      <div className="jobs-inner">
        <div className="jobs-header">
          <div>
            <h2>Jobs & Opportunities</h2>
            <p>Find your next design role or project</p>
          </div>
        </div>

        <div className="jobs-tabs">
          {/* TODO: 탭 상태 관리 → 각각 다른 API 호출 */}
          <button className="tab-active">Job Posts</button>
          <button>Project Briefs</button>
          <button>Service Packages</button>
        </div>

        {/* TODO: GET /api/jobs 결과로 교체 */}
        <div className="job-list">
          {JOBS.map(j => (
            <div key={j.id} className="job-card">
              {/* TODO: company logo image */}
              <div className="job-company-avatar" />
              <div className="job-info">
                <h3>{j.title}</h3>
                <p className="job-company">{j.company}</p>
                <div className="job-tags">
                  <span className="job-tag">{j.type}</span>
                  <span className="job-tag">{j.location}</span>
                </div>
              </div>
              <div className="job-right">
                <p className="job-salary">{j.salary}</p>
                {/* TODO: onClick → POST /api/jobs/:jobId/apply */}
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
