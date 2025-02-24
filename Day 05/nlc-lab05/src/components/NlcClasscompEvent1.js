import React, { Component } from 'react';

class NlcClasscompEvent1 extends Component {
    // ham su ly su kien 
    nlcEventHanleClick1 = ()=>{
        alert("Button 1 clicked");
    }
    nlcEventHanleClick2 = (name)=>{
        alert("name:" +name);
    }
    render() {
        return (
            <div>
                <button className='btn btn-primary mx-1' onClick={this.nlcEventHanleClick1}> button1</button>
                <button className='btn btn-primary mx-1' onClick={()=>this.nlcEventHanleClick2("linh chi ")}> button2</button>
            </div>
        );
    }
}

export default NlcClasscompEvent1;
