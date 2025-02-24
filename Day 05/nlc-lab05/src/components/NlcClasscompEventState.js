import React, { Component } from 'react';

class NlcClasscompEventState extends Component {
    constructor(props){
        super(props);
        this.state ={
            nlcfullname:" nguyen linh chi",
            nlcAge:20,
        }
    }
        // ham xu ly su kien
        nlcHandleClick1 = ()=>{
            // lay d lieu trong state
            alert("Fullname: "+this.state.nlcfullname + "\n Age:" + this.state.nlcAge );
        }
    render() {
        return (
            <div className='alert alert-danger'>
                <button  className='btn btn-primary' onClick={this.nlcHandleClick1} > button1 - du lieu trong state</button>
                
            </div>
        );
    }
}

export default NlcClasscompEventState;

