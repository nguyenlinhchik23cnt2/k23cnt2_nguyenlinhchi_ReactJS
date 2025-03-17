import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NlcNavNar from './Components/NlcNavNar'
import NlcHome from './Components/NlcHome'
import Nlcgioithieu from './Components/Nlcgioithieu'
import Nlclienhe from './Components/Nlclienhe'
import NlcListUser from './Components/NlcListUser'
import NlcFormUser from './Components/NlcformUser'
import Nlcsanpham from './Components/Nlcsanpham'
import Nlctintu from './Components/Nlctintu'

export default function NlcApp() {

  const listUsers  = [
    {id:"KH001", NlcFullName:"Nguyễn văn A ", NlcUserName:"van A", NlcPass:"123456a@"},
    {id:"KH002", NlcFullName:"Nguyễn văn B ", NlcUserName:"Van B", NlcPass:"123456a@"},
    {id:"Kh003", NlcFullName:"Nguyễn văn C ", NlcUserName:"Van C", NlcPass:"123456a@"},
  ]

  const[NlcUsers, setNlcUsers] = useState(listUsers)

  
  const NlcHandleAdd = (NlcParam)=>{
    console.log("NlcHandleAdd:", NlcParam);
    
    setNlcUsers(prev =>{ 
      return [
        ...prev,
        NlcParam
      ]
    })
  }
  return (
    <div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis" role="alert">
  

        <h1 >Nguyễn Linh Chi-k23CNT2 </h1>
        
        <hr/>
        <Router>
            <NlcNavNar />
            <Routes>
                <Route path='/' element = {<NlcHome />} />
                <Route path='/gioithieu' element = {<Nlcgioithieu />} />
                <Route path='/lienhe' element = {<Nlclienhe />} />
                <Route path='/sanpham' element={<Nlcsanpham/>} />
                <Route path='/tintu' element={<Nlctintu/>} />
                <Route path='/list-user' element = {<NlcListUser  renderNlcUsers={NlcUsers}/>} />
                <Route path='/create-user' element = {<NlcFormUser  onNlcAddNew={NlcHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}