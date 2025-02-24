import React from 'react';



export default function NlcfunccompEvent(props) {
    // ham su ly su kien 
    const nlceventButton1Click = ()=>{
        alert (" du lieu tu props:" + props.nlcRenderName);
        console.log("xin chao :",props.nlcRenderName)
    }
    const nlcHanldbuttonClike2 = (param)=>{
        // lay du lieu tu props
        alert (" du lieu tu props(button 2 click):" + props.nlcRenderName);
        // du lieu tu bien
        console.log('===============================');
        console.log("Hi:",param);
        console.log('==================================');
    }
    return (
        <div className="alert alert-danger">

            <button className='btn btn-primary mx-1' onClick={nlceventButton1Click}> button</button>

            <button className='btn btn-success mx-1' onClick={()=>nlcHanldbuttonClike2("Button2")}>Button2</button>
            
        </div>
    )
}
