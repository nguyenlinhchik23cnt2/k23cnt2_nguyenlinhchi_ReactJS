import React, { Component } from 'react';

class NlcForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        NLCStudent: {
            NLCid: '',
            NLCName: '',
            NLCAge: '',
            NLCGender: '',
            NLCBirthday: '',
            NLCBirthPlace: '',
            NLCAddress: ''
        }
    };
}

componentDidUpdate(prevProps) {
    if (prevProps.renderNLCStudent !== this.props.renderNLCStudent) {
        this.setState({ NLCStudent: this.props.renderNLCStudent });
    }
}

handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        NLCStudent: {
            ...this.state.NLCStudent,
            [name]: value
        }
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.isEdit) {
        console.log("Submitting edited student:", this.state.NLCStudent);
        this.props.onNLCHandleEdit(this.state.NLCStudent);
    } else {
        console.log("Submitting new student:", this.state.NLCStudent);
        this.props.onNLCHandleAdd(this.state.NLCStudent);
    }
    this.setState({
        NLCStudent: {
            NLCid: '',
            NLCName: '',
            NLCAge: '',
            NLCGender: '',
            NLCBirthday: '',
            NLCBirthPlace: '',
            NLCAddress: ''
        }
    });
}



  render() {
    const { NLCStudent } = this.state;

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
                                value={NLCStudent.NLCid} 
                                onChange={this.handleChange}
                                disabled={this.props.isEdit} // Disable ID in edit mode
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                        <div className="col-sm-9">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="NLCName"
                                value={NLCStudent.NLCName} 
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Tuổi</label>
                        <div className="col-sm-9">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="NLCAge"
                                value={NLCStudent.NLCAge} 
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Giới tính</label>
                        <div className="col-sm-9">
                            <select 
                                className="form-control" 
                                name="NLCGender"
                                value={NLCStudent.NLCGender} 
                                onChange={this.handleChange}
                            >
                                <option value="">Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Ngày sinh</label>
                        <div className="col-sm-9">
                            <input 
                                className="form-control" 
                                name="NLCBirthday"
                                placeholder="dd/mm/yyyy" 
                                value={NLCStudent.NLCBirthday} 
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Nơi sinh</label>
                        <div className="col-sm-9">
                            <select 
                                className="form-control" 
                                name="NLCBirthPlace"
                                value={NLCStudent.NLCBirthPlace} 
                                onChange={this.handleChange}
                            >
                                <option value="">Chọn nơi sinh</option>
                                <option value="HN">Hà Nội</option>
                                <option value="HCM">TP. Hồ Chí Minh</option>
                                <option value="DN">Đà Nẵng</option>
                                <option value="QN">Quảng Ninh</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Địa chỉ</label>
                        <div className="col-sm-9">
                            <textarea 
                                className="form-control" 
                                name="NLCAddress"
                                value={NLCStudent.NLCAddress} 
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Submit
                    </button>
                </form>
            </div>
    );
  }
}

export default NlcForm;
