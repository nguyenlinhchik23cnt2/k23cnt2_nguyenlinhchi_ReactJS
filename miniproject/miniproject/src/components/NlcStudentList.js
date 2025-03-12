import React, { Component } from 'react';
import NlcStudent from './NlcStudent';

class NlcStudentList extends Component {

    // tạo hàm xử lý sự kiện xem
    NLCHandleView = (NLCStudent) => {
        //chuyển dữ liệu về NLCApp
        this.props.onNLCHandleView(NLCStudent);
    }
    NLCHandleEditMode = (NLCStudent) => {
        // Chuyển dữ liệu lên NLCApp
        this.props.onNLCHandleEditMode(NLCStudent);

    };
    NLCHandleDelete = (NLCid) => {
        // Chuyển dữ liệu lên NLCApp
        this.props.onNLCHandleDelete(NLCid);
    };
    render() {

        // lấy dữ liệu trong props từ NLCApp
        let {renderNLCStudents}=this.props;
        console.log("list",renderNLCStudents);
        //chuyến dữ liệu và NLCStudents
        let NLCElemetStudent =renderNLCStudents.map((NLCitem,index)=>{
            return <NlcStudent  key = {index} renderNLCStudent = {NLCitem}
             onNLCHandleView={this.NLCHandleView}
             onNLCHandleEditMode={this.NLCHandleEditMode}
             onNLCHandleDelete={this.NLCHandleDelete}
             />
        })
        return (
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
                            {NLCElemetStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NlcStudentList;
