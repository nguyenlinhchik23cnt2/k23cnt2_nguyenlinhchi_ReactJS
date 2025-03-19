import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NlclistUser from './Components/NlclistUser';
import NlcNavBar from './Components/NlcNavBar';
import NlcHome from './Components/NlcHome';
import NlcCreateUser from './Components/NlcCreateUser';

export default function NlcApp() {
  return (
    <Router>  {/* ✅ Bọc toàn bộ ứng dụng trong Router */}
      <div className="app-container">
        <h1>Mini Project - Nguyen Linh Chi</h1>
        <hr />
        <NlcNavBar />  {/* ✅ Navbar luôn hiển thị */}
        <Routes>
          <Route path="/" element={<NlcHome />} />
          <Route path="/ListUser" element={<NlclistUser />} />
          <Route path="/CreateUser" element={<NlcCreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}
