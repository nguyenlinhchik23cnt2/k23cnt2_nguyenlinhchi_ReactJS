import React from 'react'

export default function NlcListUser({renderNlcUsers}) {

    const NlcElements = renderNlcUsers.map((NlcItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{NlcItem.id}</td>
                    <td>{NlcItem.NlcFullName}</td>
                    <td>{NlcItem.NlcUserName}</td>
                    <td>{NlcItem.NlcPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {NlcElements}
            </tbody>
        </table>
    </div>
  )
}