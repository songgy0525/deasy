/**
 * =============================================
 * 📌 담당: 주원 (게시판2 — Shot 관리)
 * =============================================
 * 연결할 API:
 *   POST /api/shots                → Shot 생성 (title, description, category)
 *   POST /api/shots/:shotId/files  → 파일 업로드 (multipart/form-data)
 *   POST /api/shots/:shotId/tags   → 태그 연결
 *   DELETE /api/shots/:shotId      → Shot 삭제
 *
 * 연결 후 할 것:
 *   - 파일 드래그&드롭 → FormData로 POST
 *   - Shot 생성 먼저 → shotId 받아서 파일 업로드
 *   - 태그 입력 Enter 시 태그 추가
 *   - 업로드 완료 후 /shot/:shotId 로 이동
 * =============================================
 */

import "./UploadPage.css";

export default function UploadPage() {
  return (
    <div className="upload-page">
      <div className="upload-inner">
        <h2>Upload work</h2>
        <p className="upload-sub">Share your latest project with the community</p>

        <div className="upload-layout">
          {/* TODO: 드래그&드롭 → FormData → POST /api/shots/:shotId/files */}
          <div className="upload-drop">
            <div className="drop-zone">
              <span className="drop-icon">🖼️</span>
              <p className="drop-title">Drag & drop or click to upload</p>
              <p className="drop-sub">PNG, JPG, GIF, MP4 · Max 50MB</p>
              <button className="drop-btn">Choose file</button>
            </div>
          </div>

          <form className="upload-form">
            <div className="field">
              <label>Title *</label>
              {/* TODO: onChange → title state */}
              <input type="text" placeholder="Give your shot a title" />
            </div>
            <div className="field">
              <label>Description</label>
              {/* TODO: onChange → description state */}
              <textarea placeholder="Describe your work, tools used, design intent..." rows={5} />
            </div>
            <div className="field">
              <label>Category</label>
              {/* TODO: GET /api/categories 결과로 option 동적 렌더링 */}
              <select>
                <option>Web Design</option>
                <option>Branding</option>
                <option>Illustration</option>
                <option>Mobile UI</option>
                <option>Typography</option>
                <option>3D</option>
                <option>Motion</option>
              </select>
            </div>
            <div className="field">
              <label>Tags</label>
              {/* TODO: Enter 시 태그 추가 → POST /api/shots/:shotId/tags */}
              <input type="text" placeholder="Type a tag and press Enter" />
            </div>
            <div className="upload-actions">
              {/* TODO: 임시저장 로직 */}
              <button type="button" className="draft-btn">Save draft</button>
              {/* TODO: onSubmit → POST /api/shots → POST /api/shots/:shotId/files */}
              <button type="submit" className="publish-btn">Publish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
