/**
 * =============================================
 * 📌 담당: 경용 (게시판1 — 회원 관리 Auth)
 * =============================================
 * 연결할 API:
 *   POST /api/auth/signup         → 회원가입 (nickname, email, password, role)
 *   GET  /api/auth/google         → 구글 OAuth 가입
 *
 * 연결 후 할 것:
 *   - role 선택값 (DESIGNER / CLIENT) state로 관리
 *   - 가입 성공 시 자동 로그인 후 / 로 이동
 *   - 이메일 중복 에러 처리
 * =============================================
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthPage.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("DESIGNER");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:8080/api/auth/signup", {
        nickname,
        email,
        password,
        role,
      });
      // 가입 성공 후 자동 로그인
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      const msg = err.response?.data;
      if (typeof msg === "string") {
        setError(msg);
      } else {
        setError("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">palette<span>.</span></Link>
        <h2>Create account</h2>
        <p className="auth-sub">Start as a designer or client</p>

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

        <div className="divider"><span>or</span></div>

        <form className="auth-form" onSubmit={handleSignup}>
          <div className="role-select">
            <button
              type="button"
              className={`role-btn ${role === "DESIGNER" ? "role-active" : ""}`}
              onClick={() => setRole("DESIGNER")}
            >
              🎨 Designer
            </button>
            <button
              type="button"
              className={`role-btn ${role === "CLIENT" ? "role-active" : ""}`}
              onClick={() => setRole("CLIENT")}
            >
              💼 Client
            </button>
          </div>
          <div className="field">
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Your display name"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="8+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="submit-btn">Get started</button>
        </form>

        <p className="auth-link">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  );
}
