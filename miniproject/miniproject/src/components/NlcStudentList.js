import React, { Component } from "react";
import NlcStudent from "./NlcStudent";

class NlcStudentList extends Component {
    // Hàm xử lý chức năng xem thông tin sinh viên
    nlcHandleView = (nlcStudent) => {
        this.props.onNlcHandleView(nlcStudent);
    };

    // Hàm xử lý chức năng xóa sinh viên
    nlcHandleDelete = (nlcID) => {
        this.props.onNlcHandleDelete(nlcID);
    };

    render() {
        let { renderNlcStudents } = this.props;

        return (
            <div>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Ngày sinh</th>
                                    <th>Nơi sinh</th>
                                    <th>Địa chỉ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderNlcStudents.map((nlcItem, index) => (
                                    <NlcStudent
                                        key={nlcItem.nlcID} // Sử dụng nlcID thay vì index
                                        index={index}
                                        renderNlcStudent={nlcItem}
                                        onNlcHandleView={this.nlcHandleView}
                                        onNlcHandleDelete={this.nlcHandleDelete}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default NlcStudentList;
