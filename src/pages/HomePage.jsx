/**
 * =============================================
 * 📌 담당: 주원 (게시판2 — Shot 관리 + 게시판3 탐색)
 * =============================================
 * 연결할 API:
 *   GET /api/shots                 → Shot 목록 (카테고리, 태그 필터 포함)
 *   GET /api/categories            → 카테고리 목록
 *   GET /api/tags                  → 인기 태그 목록
 *
 * 연결 후 할 것:
 *   - 카테고리 버튼 클릭 시 ?category=Branding 파라미터로 필터
 *   - 태그 클릭 시 ?tag=xxx 파라미터로 필터
 *   - 무한 스크롤 or 페이지네이션
 * =============================================
 */

import { Link } from "react-router-dom";
import "./HomePage.css";

const TOOL_BTNS = [
  { label: "Branding", icon: "◈", bg: "linear-gradient(135deg, #2D8659, #52c48a)" },
  { label: "Web Design", icon: "⬡", bg: "linear-gradient(135deg, #3B82F6, #60a5fa)" },
  { label: "Illustration", icon: "✦", bg: "linear-gradient(135deg, #8B5CF6, #c084fc)" },
  { label: "Motion", icon: "◉", bg: "linear-gradient(135deg, #F59E0B, #fcd34d)" },
  { label: "3D", icon: "⬟", bg: "linear-gradient(135deg, #EF4444, #f87171)" },
  { label: "Typography", icon: "Aa", bg: "linear-gradient(135deg, #06B6D4, #67e8f9)", text: true },
];

const TAGS = ["All", "Web Design", "Branding", "Illustration", "Mobile UI", "Typography", "3D", "Motion"];

// TODO: 아래 MOCK_SHOTS를 GET /api/shots 결과로 교체
const MOCK_SHOTS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Shot Title ${i + 1}`,
  author: `designer_${i + 1}`,
  likes: Math.floor(Math.random() * 500) + 50,
  views: Math.floor(Math.random() * 3000) + 200,
  color: ["#2D8659","#3B82F6","#8B5CF6","#F59E0B","#EF4444","#06B6D4"][i % 6],
  lightColor: ["#e8f5ef","#eff6ff","#f3eeff","#fffbeb","#fef2f2","#ecfeff"][i % 6],
}));

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <h1>Discover the world's<br />top designers & creatives</h1>
          <p>The platform where designers share work, find clients, and grow careers.</p>
          <div className="hero-btns">
            <Link to="/signup" className="cta-primary">Get started — it's free</Link>
            <Link to="/" className="cta-secondary">Explore work</Link>
          </div>
        </div>
      </section>

      {/* TODO: GET /api/categories 결과로 TOOL_BTNS 교체 */}
      <section className="tools-section">
        <div className="tools-inner">
          <p className="tools-label">Browse by category</p>
          <div className="tools-grid">
            {TOOL_BTNS.map((t) => (
              <button key={t.label} className="tool-btn">
                <span className="tool-icon" style={{ background: t.bg }}>
                  <span style={{ fontSize: t.text ? 13 : 20, fontWeight: 800, color: '#fff' }}>{t.icon}</span>
                </span>
                <span className="tool-label">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="explore">
        <div className="explore-inner">
          <div className="explore-header">
            <h2>Popular shots</h2>
            {/* TODO: GET /api/tags 결과로 TAGS 교체 */}
            <div className="tag-list">
              {TAGS.map((t, i) => (
                <button key={t} className={`tag ${i === 0 ? "tag-active" : ""}`}>{t}</button>
              ))}
            </div>
          </div>

          {/* TODO: GET /api/shots 결과로 MOCK_SHOTS 교체 */}
          <div className="shot-grid">
            {MOCK_SHOTS.map((shot) => (
              <Link to={`/shot/${shot.id}`} key={shot.id} className="shot-card">
                {/* TODO: shot.thumbnail_url → <img> 로 교체 */}
                <div className="shot-thumb" style={{ background: shot.lightColor }}>
                  <div style={{ width: "55%", height: "55%", background: shot.color, borderRadius: 8, opacity: 0.85 }} />
                  <div className="shot-overlay">
                    <span>♥ {shot.likes}</span>
                    <span>◎ {shot.views}</span>
                  </div>
                </div>
                <div className="shot-info">
                  <p className="shot-title">{shot.title}</p>
                  <p className="shot-author">@{shot.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
