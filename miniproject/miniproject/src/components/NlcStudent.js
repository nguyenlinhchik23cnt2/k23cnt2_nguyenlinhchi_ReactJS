import React, { Component } from 'react';



export default class NlcStudent extends Component {

     // Function to handle viewing details
     NLCHandleView = (NLCStudent) => {
        // Pass to NLCStudentList
        this.props.onNLCHandleView(NLCStudent);
    }

    // Function to handle deletion
    NLCHandleDelete = (NLCid) => {
        // Pass to NLCStudentList
        this.props.onNLCHandleDelete(NLCid);
    }

    // Function to handle switching to edit mode
    NLCHandleEdit = (NLCStudent) => {
        // Pass to NLCStudentList
        this.props.onNLCHandleEditMode(NLCStudent);
    }
    
    render() {
        const { renderNLCStudent, index } = this.props;
        console.log("student: ", renderNLCStudent);

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{renderNLCStudent.NLCid}</td>
                <td>{renderNLCStudent.NLCName}</td>
                <td>{renderNLCStudent.NLCAge}</td>
                <td>{renderNLCStudent.NLCGender}</td>
                <td>{renderNLCStudent.NLCBirthday}</td>
                <td>{renderNLCStudent.NLCBirthPlace === 'HN' ? 'Hà Nội' : 
                    renderNLCStudent.NLCBirthPlace === 'HCM' ? 'TP. Hồ Chí Minh' : 
                    renderNLCStudent.NLCBirthPlace === 'DN' ? 'Đà Nẵng' : 
                    renderNLCStudent.NLCBirthPlace === 'QN' ? 'Quảng Ninh' : renderNLCStudent.NLCBirthPlace}
                </td>
                <td>{renderNLCStudent.NLCAddress}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={() => this.NLCHandleView(renderNLCStudent)}
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={() => this.NLCHandleEdit(renderNLCStudent)}
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={() => this.NLCHandleDelete(renderNLCStudent.NLCid)}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}
