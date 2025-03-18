
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function NlcApilocal(){
    // khoi taoj state
    const[NlcListUser,setNlcListUser] =useState([])
    // doc du lieu tu api local va set cho nlclistuser
    const apiUrl ="http://localhost:3001/users"
    //lay dannh sachs tu apiUrl
    useEffect(()=>{
        axios.get(apiUrl)
        .then((NlcResponse)=>{
            setNlcListUser(NlcResponse.data)
        })
        .catch((error)=>{

        
            console.log("loi");
    },[])
        
    })
    return (
        <div>
            <h2> Đọc dữ liệu tưg api local  </h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>
                            FullName
                        </th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        NlcListUser.map((NlcItem,index)=>{
                            return(
                                <tr>
                                    <td>{NlcItem.fullName}</td>
                                    <td>{NlcItem.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
