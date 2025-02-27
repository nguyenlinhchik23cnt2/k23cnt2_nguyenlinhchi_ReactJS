import React, { Component } from 'react';

class NlcEventForm1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nlcStudentName:'linh chi',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (nlcStudentName) thay đổi
    nlcHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nlcStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    nlcHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.nlcStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.nlcHandleSubmit}>
                    <label htmlFor='nlcStudentName'>
                        <input type='text' name='nlcStudentName' id='nlcStudentName' 
                            value={this.state.nlcStudentName}
                            onChange={this.nlcHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default NlcEventForm1;
