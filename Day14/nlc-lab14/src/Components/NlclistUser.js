import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NlclistUser() {
    // State initialization
    const [NlcListUser, setNlcListUser] = useState([]);

    // API endpoint
    const NlcApi = "https://67d919b500348dd3e2a977c6.mockapi.io/K23CNT2_nguyenlinhchi/Nlc_user";

    // Fetch data from API
    useEffect(() => {
        axios
            .get(NlcApi)
            .then((Nlc_response) => {
                setNlcListUser(Nlc_response.data);
            })
            .catch((error) => {
                console.log("Lỗi phát sinh", error);
            });
    }, []);

    // Render table rows
    const NlcElementUser = NlcListUser.map((NlcItem, index) => {
        return (
            <tr key={index}>
                <td>{NlcItem.id}</td>
                <td>{NlcItem.Nlc_name}</td>
                <td>{NlcItem.Nlc_phone}</td>
                <td>{NlcItem.Nlc_email}</td>
                <td>{NlcItem.Nlc_active ? "Active" : "Inactive"}</td>
                <td>
                    <button className="btn btn-warning btn-sm mx-1">Sửa</button>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Danh sách người dùng</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>{NlcElementUser}</tbody>
            </table>
        </div>
    );
}
