import React, { Component } from 'react';

class NlcEventForm2 extends Component {

    constructor(props){
        super(props);
        this.state={
            nlcCourse: 'CSS3',
        }
    }
     // Hàm xử lý sự kiện khi thay đồi khóa học
     nlcHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nlcCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    nlcHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.nlcCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Select</h2>
                <form >
                    <label htmlFor=''>
                    <select name='nlcCourse' id='nlcCourse'
                            value={this.state.nlcCourse}
                            onChange={this.nlcHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.nlcHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NlcEventForm2;
