import React, { Component } from 'react';

class NlcClasscompdata extends Component {

    constructor(props){
        super(props);
    }
    // ham xu ly su kien
    nlcHandleClick1 = ()=>{
        // chuyen doi du lieu len app
        this.props.onNlcDatatoapp("du lieu tu components con")

    }
    render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-primary' onClick={this.nlcHandleClick1}>button chuyen du lieu len app</button>
            </div>
        );
    }
}

export default NlcClasscompdata;
