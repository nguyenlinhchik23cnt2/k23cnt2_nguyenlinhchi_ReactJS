import React, { Component } from 'react';

class NlcEventForm5 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nlcName:'Chi',
            tvcAge:20,
            tvcGender:'Female',
            tvcCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nlcHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nlcHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nlcName + "\n" + this.state.nlcAge);

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onNlcHandleSubmit(this.state);
    }


    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nlcName'>Student Name:</label>
                        <input type='text' name='nlcName' id='nlcName' 
                            value={this.state.nlcName}
                            onChange={this.nlcHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='tvcAge'>Student Age:</label>
                        <input type='text' name='nlcAge' id='nlcAge' 
                            value={this.state.nlcAge}
                            onChange={this.nlcHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nlcGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nlcGender' id='nlcMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nlcGender === 'Male'}
                                onChange={this.nlcHandleChange} />
                            <label htmlFor='nlcMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nlcGender' id='nlcFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nlcGender === 'Female'}
                                onChange={this.nlcHandleChange} />
                            <label htmlFor='nlcFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nlcGender' id='nlcNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nlcGender === 'None'}
                                onChange={this.nlcHandleChange} />
                            <label htmlFor='nlcNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nlcCourse'>
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
                    </div>
                    <button onClick={this.nlcHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NlcEventForm5;
