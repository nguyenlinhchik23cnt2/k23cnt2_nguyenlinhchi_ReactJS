import React, { Component } from 'react';

class NlcEventForm3 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nlcGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nlcHandleChange = (event)=>{
        this.setState({
            nlcGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nlcHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nlcGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nlcGioiTinh'  id='nlcNam' className='mx-2'
                            value="Nam" checked={this.state.nlcGioiTinh === 'Nam'} onChange={this.nlcHandleChange}/> 
                            <label htmlFor='tvcNam'>Nam</label>  
                        <input type='radio' name='nlcGioiTinh'  id='nlcNu' className='mx-2'
                            value="Nữ" checked={this.state.nlcGioiTinh === 'Nữ'} onChange={this.nlcHandleChange}/> 
                            <label htmlFor='tvcNu'>Nữ</label>  
                        <input type='radio' name='nlcGioiTinh' id='nlcKhac' className='mx-2'
                            value="Khác" checked={this.state.nlcGioiTinh === 'Khác'} onChange={this.nlcHandleChange}/> 
                            <label htmlFor='nlcKhac'>Khác</label>
                    </div>
                    <button onClick={this.nlcHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NlcEventForm3;
