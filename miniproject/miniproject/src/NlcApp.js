import React, { Component } from "react";
import NlcControl from "./components/NlcControl";
import NlcStudentList from "./components/NlcStudentList";
import NlcForm from "./components/NlcForm";

class NlcApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nlcStudents: [
                { nlcID: "SV001", nlcName: "Linh Chi", nlcAge: 20, nlcGender: "Nữ", nlcBirthday: "24/01/2005", nlcBirthPlace: "Hà Nội", nlcAddress: "12 Lí Ải" },
                { nlcID: "SV002", nlcName: "Hồng Nhung", nlcAge: 21, nlcGender: "Nữ", nlcBirthday: "15/02/2004", nlcBirthPlace: "TP HCM", nlcAddress: "45 Nguyễn Trãi" },
                { nlcID: "SV003", nlcName: "Minh Khoa", nlcAge: 22, nlcGender: "Nam", nlcBirthday: "10/06/2003", nlcBirthPlace: "Đà Nẵng", nlcAddress: "89 Lê Lợi" },
                { nlcID: "SV004", nlcName: "Anh Tuấn", nlcAge: 23, nlcGender: "Nam", nlcBirthday: "20/08/2002", nlcBirthPlace: "Hải Phòng", nlcAddress: "32 Trần Hưng Đạo" }
            ],
            nlcStudent: {} // Sinh viên đang chọn
        };
    }

    // Hàm xử lý sự kiện xem thông tin sinh viên
    nlcHandleView = (nlcStudent) => {
        this.setState({
            nlcStudent: nlcStudent,
        });
    };

    // Hàm xử lý sự kiện xóa sinh viên
    nlcHandleDelete = (nlcID) => {
        const updatedStudents = this.state.nlcStudents.filter(student => student.nlcID !== nlcID);
        this.setState({ nlcStudents: updatedStudents });
    };

    render() {
        console.log("View Student: ", this.state.nlcStudent);

        return (
            <div>
                <div className="row">
                    <div className="col-lg-7 grid-margin stretch-card">
                        <div className="card">
                            {/* Header */}
                            <NlcControl />

                            {/* Danh sách sinh viên */}
                            <NlcStudentList
                                renderNlcStudents={this.state.nlcStudents}
                                onNlcHandleView={this.nlcHandleView}
                                onNlcHandleDelete={this.nlcHandleDelete}
                            />
                        </div>
                    </div>

                    {/* Form thêm/sửa sinh viên */}
                    <div className="col-5 grid-margin">
                        <NlcForm renderNlcStudent={this.state.nlcStudent} />
                    </div>
                </div>
            </div>
        );
    }
}

export default NlcApp;
