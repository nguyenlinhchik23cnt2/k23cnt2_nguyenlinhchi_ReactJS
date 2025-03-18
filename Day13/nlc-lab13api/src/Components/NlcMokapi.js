import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NlcMokapi() {
    // Khởi tạo state
    const [NlcListUser, setNlcListUser] = useState([]);

    // API 
    const NlcApionline = "https://67d919b500348dd3e2a977c6.mockapi.io/K23CNT2_nguyenlinhchi/nlc_users";

    // Đọc dữ liệu từ API 
    useEffect(() => {
        axios
            .get(NlcApionline)
            .then((Nlc_response) => {
                setNlcListUser(Nlc_response.data);
            })
            .catch((error) => {
                console.log("Lỗi phát sinh", error);
            });
    }, []);

    // View data
    const NlcElementUser = NlcListUser.map((NlcItem, index) => {
        return (
            <tr key={index}>
                <td>{NlcItem.nlcid}</td>
                <td>{NlcItem.nlcfullName}</td>
                <td>{NlcItem.nlcage}</td>
                <td>{NlcItem.nlcActive ? "Có" : "Không"}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div className='alert alert-danger'>
            <h2>Danh sách</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và Tên</th>
                        <th>Tuổi</th>
                        <th>Hoạt động</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {NlcElementUser}
                </tbody>
            </table>
        </div>
    );
}
