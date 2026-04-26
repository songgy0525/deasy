/**
 * =============================================
 * 📌 담당: 경용 (게시판1 — 회원 관리 Auth)
 * =============================================
 * 연결할 API:
 *   POST /api/auth/login          → 로그인 (email, password)
 *   GET  /api/auth/google         → 구글 OAuth 로그인
 *   POST /api/auth/logout         → 로그아웃
 *
 * 연결 후 할 것:
 *   - 로그인 성공 시 JWT 토큰 저장 (localStorage or cookie)
 *   - 실패 시 에러 메시지 표시
 *   - 구글 로그인 버튼 → OAuth 리다이렉트
 * =============================================
 */

import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-box">
        <Link to="/" className="login-logo">palette<span>.</span></Link>

        <h1>Sign in</h1>
        <p className="login-sub">to continue to palette</p>

        <form className="login-form">
          <div className="login-field">
            {/* TODO: onChange → email state */}
            <input type="email" placeholder="Email" />
          </div>
          <div className="login-field">
            {/* TODO: onChange → password state */}
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-forgot">
            <Link to="#">Forgot password?</Link>
          </div>
          {/* TODO: onSubmit → POST /api/auth/login */}
          <button type="submit" className="login-submit">Next</button>
        </form>

        <div className="login-divider"><span>or</span></div>

        {/* TODO: onClick → GET /api/auth/google */}
        <button className="google-btn">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
          </svg>
          Continue with Google
        </button>

        <p className="login-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="login-visual">
        <div className="visual-grid">
          {[
            { bg: "linear-gradient(135deg, #2D8659, #52c48a)", icon: "🎨" },
            { bg: "linear-gradient(135deg, #3B82F6, #60a5fa)", icon: "✦" },
            { bg: "linear-gradient(135deg, #8B5CF6, #c084fc)", icon: "◈" },
            { bg: "linear-gradient(135deg, #F59E0B, #fcd34d)", icon: "⬡" },
            { bg: "linear-gradient(135deg, #EF4444, #f87171)", icon: "◉" },
            { bg: "linear-gradient(135deg, #06B6D4, #67e8f9)", icon: "⬟" },
          ].map((v, i) => (
            <div key={i} className="visual-card" style={{ background: v.bg }}>
              <span>{v.icon}</span>
            </div>
          ))}
        </div>
        <div className="visual-text">
          <h2>Where designers<br />meet clients.</h2>
          <p>Showcase your work. Find your next project.</p>
        </div>
      </div>
    </div>
  );
}
