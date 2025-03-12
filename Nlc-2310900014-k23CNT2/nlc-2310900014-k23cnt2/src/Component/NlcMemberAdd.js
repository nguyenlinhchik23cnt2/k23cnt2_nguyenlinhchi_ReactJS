import React, { Component } from 'react';

class NLCMemberAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NLCMember: {
        NLCid: '',
        NLCFullname: '',
        NLCUsername: '',
        NLCPassword: '',
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.renderNLCMember !== this.props.renderNLCMember) {
      this.setState({ NLCMember: this.props.renderNLCMember || this.state.NLCMember });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      NLCMember: {
        ...this.state.NLCMember,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.isEdit) {
      console.log("Lưu thành công:", this.state.NLCMember);
      this.props.onNLCHandleEdit(this.state.NLCMember);
    } else {
      console.log("Thêm thành công:", this.state.NLCMember);
      this.props.onNLCHandleAdd(this.state.NLCMember);
    }
    this.setState({
      NLCMember: {
        NLCid: '',
        NLCFullname: '',
        NLCUsername: '',
        NLCPassword: '',
      },
    });
  };

  render() {
    const { NLCMember } = this.state;

    return (
      <div className="card-body">
        <h3 className="card-title">Thông tin sinh viên</h3>
        <form className="form-sample" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="NLCid"
                value={NLCMember.NLCid}
                onChange={this.handleChange}
                disabled={this.props.isEdit}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="NLCFullname"
                value={NLCMember.NLCFullname}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Tên đăng nhập</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="NLCUsername"
                value={NLCMember.NLCUsername}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Mật khẩu</label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                name="NLCPassword"
value={NLCMember.NLCPassword}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary me-2">
            {this.props.isEdit ? 'Lưu' : 'Thêm'}
          </button>
        </form>
      </div>
    );
  }
}

export default NLCMemberAdd;