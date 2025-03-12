import React, { Component } from 'react';

class NLCMemberList extends Component {
  NLCHandleView = (NLCMember) => {
    this.props.onNLCHandleView(NLCMember);
  };

  NLCHandleEditMode = (NLCMember) => {
    this.props.onNLCHandleEditMode(NLCMember);
  };

  NLCHandleDelete = (NLCid) => {
    this.props.onNLCHandleDelete(NLCid);
  };

  render() {
    const { renderNLCStudents } = this.props;
    console.log("list", renderNLCStudents);

    const NLCElementMembers = renderNLCStudents.map((NLCitem, index) => (
      <tr key={NLCitem.NLCid || index}>
        <td>{index + 1}</td>
        <td>{NLCitem.NLCid}</td>
        <td>{NLCitem.NLCFullname}</td>
        <td>{NLCitem.NLCUsername}</td>
        <td>{NLCitem.NLCPassword}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => this.NLCHandleView(NLCitem)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => this.NLCHandleEditMode(NLCitem)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={() => this.NLCHandleDelete(NLCitem.NLCid)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    ));

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
                <th>Tên đăng nhập</th>
                <th>Mật khẩu</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{NLCElementMembers}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NLCMemberList;
