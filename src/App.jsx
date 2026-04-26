import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ShotDetailPage from "./pages/ShotDetailPage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import JobsPage from "./pages/JobsPage";
import BriefPage from "./pages/BriefPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shot/:id" element={<ShotDetailPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/brief" element={<BriefPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
