import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NlcHome from './Components/NlcHome';
import NlcAbout from './Components/NlcAbout';
import NlcContact from './Components/NlcContact';
import NlcListUser from './Components/NlcListUser';
import NlcFormUser from './Components/NlcFormUser';
import NlcNavNar from './Components/NlcNavNar'; // Ensure this file exists

export default function NlcApp() { // Renamed to PascalCase

  const listUsers = [
    { id: "SV001", NlcFullName: "Trịnh Văn Chung", NlcUserName: "ChungChung", NlcPass: "123456a@" },
    { id: "SV002", NlcFullName: "Trịnh Quan Quang", NlcUserName: "QuanTrinh", NlcPass: "123456a@" },
    { id: "SV003", NlcFullName: "Nguyễn Quang A", NlcUserName: "QuangA", NlcPass: "123456a@" },
  ];

  const [NlcUsers, setNlcUsers] = useState(listUsers);

  // Hàm xử lý sự kiện thêm mới
  const NlcHandleAdd = (NlcParam) => {
    console.log("NlcHandleAdd:", NlcParam);
    setNlcUsers(prev => [...prev, NlcParam]);
  };

  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Nguyễn Linh Chi  - K23CNT2]</h1>
      <hr />
      <Router>
        <NlcNavNar /> {/* Make sure this component exists */}
        <Routes>
          <Route path='/' element={<NlcHome />} />
          <Route path='/about' element={<NlcAbout />} />
          <Route path='/contact' element={<NlcContact />} />
          <Route path='/list-user' element={<NlcListUser renderNlcUsers={NlcUsers} />} />
          <Route path='/create-user' element={<NlcFormUser onNlcAddNew={NlcHandleAdd} />} />
        </Routes>
      </Router>
    </div>
  );
}
