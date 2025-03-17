import React, { useState } from 'react'

export default function NlcFormUser({onNlcAddNew}) {

    const [id, setNlcId] = useState('')
    const [NlcFullName, setNlcFullName] = useState('')
    const [NlcUserName, setNlcUserName] = useState('')
    const [NlcPass, setNlcPass] = useState('')

   

    const NlcHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,NlcFullName,NlcUserName, NlcPass)
        
        onNlcAddNew({id,NlcFullName,NlcUserName, NlcPass})
    }
  return (
    <div>
        <form>
            <p>Mã khách Hàng :
                <input type='text' name='id' value={id} onChange={(ev)=>setNlcId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='NlcFullName' value={NlcFullName} onChange={(ev)=>setNlcFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='NlcUserName' value={NlcUserName} onChange={(ev)=>setNlcUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='NlcPass' value={NlcPass} onChange={(ev)=>setNlcPass(ev.target.value)} /> </p>

            <p>
                <button name='NlcSave' onClick={NlcHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}