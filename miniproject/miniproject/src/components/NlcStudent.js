import React, { Component } from "react";

class NlcStudent extends Component {
    // Hàm xử lý chức năng xem thông tin sinh viên
    nlcHandleView = () => {
        this.props.onNlcHandleView(this.props.renderNlcStudent);
    };

    // Hàm xử lý chức năng xóa sinh viên
    nlcHandleDelete = () => {
        this.props.onNlcHandleDelete(this.props.renderNlcStudent.nlcID);
    };

    render() {
        let { index, renderNlcStudent } = this.props;
        let { nlcID, nlcName, nlcAge, nlcGender, nlcBirthday, nlcBirthPlace, nlcAddress } = renderNlcStudent;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{nlcID}</td>
                <td>{nlcName}</td>
                <td>{nlcAge}</td>
                <td>{nlcGender}</td>
                <td>{nlcBirthday}</td>
                <td>{nlcBirthPlace}</td>
                <td>{nlcAddress}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={this.nlcHandleView}
                        >
                            Xem
                        </button>
                        <button type="button" className="btn btn-warning btn-icon-text">
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={this.nlcHandleDelete}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default NlcStudent;
