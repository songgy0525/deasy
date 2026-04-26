/**
 * =============================================
 * 📌 담당: 주원 (게시판2 연장 — 1:1 채팅 WebSocket)
 * =============================================
 * 연결할 API:
 *   GET  /api/chat/rooms              → 내 채팅방 목록
 *   GET  /api/chat/rooms/:roomId/messages → 메시지 내역
 *   POST /api/chat/rooms              → 채팅방 생성 (경용 파트 Shot 상세에서 호출)
 *   WS   /ws/chat (STOMP)             → 메시지 송수신 (Websocket)
 *     - subscribe: /topic/chat/{roomId}
 *     - publish:   /app/chat/{roomId}
 *
 * 연결 후 할 것:
 *   - SockJS + STOMP 연결
 *   - 채팅방 입장 시 /topic/chat/{roomId} 구독
 *   - 전송 클릭 시 /app/chat/{roomId} 로 publish
 *   - is_read 처리 → 읽음 시 badge 제거
 * =============================================
 */

import "./ChatPage.css";

const ROOMS = [
  { id: 1, name: "Client A", last: "Please check the file!", time: "2:30 PM", unread: 2 },
  { id: 2, name: "Client B", last: "Thank you 😊", time: "11:10 AM", unread: 0 },
  { id: 3, name: "Designer C", last: "Collaboration proposal", time: "Yesterday", unread: 1 },
];

const MESSAGES = [
  { id: 1, mine: false, text: "Hi! I'd like to discuss a design project.", time: "2:00 PM" },
  { id: 2, mine: true, text: "Hello! Nice to meet you. What kind of project?", time: "2:05 PM" },
  { id: 3, mine: false, text: "I need logo & branding. I found you through your portfolio.", time: "2:10 PM" },
  { id: 4, mine: true, text: "Thank you! What's your budget and timeline?", time: "2:15 PM" },
  { id: 5, mine: false, text: "Please check the file!", time: "2:30 PM" },
];

export default function ChatPage() {
  return (
    <div className="chat-page">
      {/* TODO: GET /api/chat/rooms 결과로 교체 */}
      <div className="chat-sidebar">
        <div className="chat-sidebar-header">
          <h3>Messages</h3>
        </div>
        <div className="chat-rooms">
          {ROOMS.map((r, i) => (
            <div key={r.id} className={`chat-room ${i === 0 ? "active" : ""}`}>
              {/* TODO: 상대방 avatar_url */}
              <div className="room-avatar" />
              <div className="room-info">
                <p className="room-name">{r.name}</p>
                <p className="room-last">{r.last}</p>
              </div>
              <div className="room-meta">
                <span className="room-time">{r.time}</span>
                {/* TODO: is_read = false 메시지 수 */}
                {r.unread > 0 && <span className="room-badge">{r.unread}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="room-avatar sm" />
          <div>
            {/* TODO: 현재 채팅방 상대방 nickname */}
            <p className="chat-name">Client A</p>
            <p className="chat-status">Online</p>
          </div>
        </div>

        {/* TODO: GET /api/chat/rooms/:roomId/messages 결과로 교체 */}
        <div className="chat-messages">
          {MESSAGES.map(m => (
            <div key={m.id} className={`msg-row ${m.mine ? "mine" : ""}`}>
              {!m.mine && <div className="room-avatar sm" />}
              <div className="msg-bubble">
                <p>{m.text}</p>
                <span className="msg-time">{m.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-row">
          {/* TODO: STOMP publish → /app/chat/{roomId} */}
          <input placeholder="Type a message..." />
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}
