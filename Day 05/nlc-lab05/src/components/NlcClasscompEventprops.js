import React, { Component } from 'react';

class NlcClasscompEventprops extends Component {
    // ham su ly su kien
    nlcHandleClick= ()=>{
        alert("hello......" +this.props.nlcRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary ' onClick={this.nlcHandleClick1}>button1</button>
            </div>
        );
    }
}

export default NlcClasscompEventprops;

