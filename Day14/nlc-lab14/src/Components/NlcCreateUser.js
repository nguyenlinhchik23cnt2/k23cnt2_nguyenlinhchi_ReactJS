import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate


export default function  NlcCreateUser(){
    const [Nlc_name,setNlc_name] = useState('');
    const [Nlc_email,setNlc_email]= useState('');
    const [Nlc_phone,setNlc_phone] = useState('');
    const [Nlc_active,setNlc_active] = useState(true);
    const navigate = useNavigate();  // ✅ Sử dụng useNavigate
    //
    const NlcCreateUsers ="https://67d919b500348dd3e2a977c6.mockapi.io/K23CNT2_nguyenlinhchi/Nlc_user"
    //
    const NlcHandlesubmit =(event) => {
        event.preventDefault();
        console.log("Nlc_active",Nlc_active);
        ///
        let NlcUewUser = {Nlc_name,Nlc_email,Nlc_phone,Nlc_active};
        console.log(NlcUewUser);
        ///
        axios.post(NlcCreateUsers,NlcUewUser)
        .then((Nlc_response) => {
            console.log("User added successfully:", Nlc_response.data);
            alert("Thêm user thành công!");
                navigate("/ListUser");  // ✅ Chuyển hướng về danh sách
      })

      .catch((error) => {
        console.error("Error adding user:", error);
      });
    }
    return(
        <div className='alert alert-info'>
            <h2> Thê mới người dùng </h2>
            <hr/>
            <from>
                <div className='mb-1'>
                    <label htmlFor="Nlc_name">Name</label>
                    <input
                        type='text'
                        name="Nlc_name"
                        id="Nlc_name"
                        value={Nlc_name}
                        onChange={(ev) => setNlc_name(ev.target.value)}
                    />
                </div>

                <div className='mb-1'>
                    <label htmlFor="Nlc_email">Email</label>
                    <input
                        type='text'
                        name="Nlc_email"
                        id="Nlc_email"
                        value={Nlc_email}
                        onChange={(ev) => setNlc_email(ev.target.value)}
                    />
                </div>

                <div className='mb-1'>
                    <label htmlFor="Nlc_phone">Phone</label>
                    <input
                        type='text'
                        name="Nlc_phone"
                        id="Nlc_phone"
                        value={Nlc_phone}
                        onChange={(ev) => setNlc_phone(ev.target.value)}
                    />
                </div>

                <div className='mb-1'>
                    <label htmlFor="Nlc_active">Active</label>
                    <input
                        type='radio'
                        name="Nlc_active"
                        id="Nlc_active_co"
                        value={true}
                        checked={Nlc_active ===true}
                        onChange={(ev) => setNlc_active(true)}
                    />
                    <label htmlFor="Nlc_active_co">co</label>
                    <input
                        type='radio'
                        name="Nlc_active"
                        id="Nlc_active_kh"
                        value={false}
                        checked={Nlc_active ===false}
                        onChange={(ev) => setNlc_active(true)}
                    />
                    <label htmlFor="Nlc_active_kh">khong</label>

                </div>
                <button type="submit" onClick={NlcHandlesubmit}> submit</button>
            </from>
            
        </div>
    )
}
