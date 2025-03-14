import React, { useState } from 'react';

export default function NlcUseState() {
    // Khởi tạo State 
    const [NlcCount, setNlcCount] = useState(0);

    // Khởi tạo state là một mảng  
    const NlcArr = [10, 12, 20, 22];
    const [NlcArray, setNlcArray] = useState(NlcArr);

    // Khởi tạo State với mảng Object 
    const NlcStudents = [
        { NlcId: 1, NlcName: 'Nguyen Van A', NlcAge: 20 },
        { NlcId: 2, NlcName: 'Nguyen Van B', NlcAge: 22 },
    ];
    const [NlcStudentList, setNlcStudentList] = useState(NlcStudents);
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng 
        const NlcHandleAddList = () => {
            setNlcArray([
                ...NlcArray,
                parseInt(Math.random() * 100),
            ])
        };

    // Hàm xử lý sự kiện khi thêm mới sinh viên vào danh sách
    const NlcHandleAddNewStudent = () => {
        let NlcStudent = {
            NlcId: "SV003",
            NlcName: "Nguyen Van C",
            NlcAge: 24
        }
        // Thêm vào state NlcStudentList
        setNlcStudentList(
            [
                ...NlcStudentList,
                NlcStudent
            ]);

        console.log("List : ", NlcStudentList);

    }
    return (
        <div className='alert alert-danger'>
            <h2>Use State Demo</h2>
            <div>
                <h3>Count: {NlcCount}</h3>
                <button onClick={() => setNlcCount(NlcCount + 1)}>Tăng</button>
                <button onClick={() => setNlcCount(NlcCount - 1)}>Giảm</button>
            </div>
            <div>
                <h3>Array: {NlcArray.toString()}</h3>
                <button onClick={NlcHandleAddList}>Thêm phần tử</button>
            </div>
            <div>
                <h3>Danh sách sinh viên</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            NlcStudentList.map((NlcStudent) => {
                                return (
                                    <tr key={NlcStudent.NlcId}>
                                        <td>{NlcStudent.NlcId}</td>
                                        <td>{NlcStudent.NlcName}</td>
                                        <td>{NlcStudent.NlcAge}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={NlcHandleAddNewStudent}>Thêm mới SV </button>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}