import React from "react";
import "./App.css";
import Onboarding from "./components/Onboarding";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Followers from "./components/Followers";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
