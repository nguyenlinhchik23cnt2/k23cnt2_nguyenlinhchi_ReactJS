import React from "react";

export default function Nlcfuncevent1() {
    // Hàm xử lý sự kiện
    const nlceventButton1Click = () => {
        alert("Button 1 - Clicked");
    };

    const nlceventButton2Click = () => {
        alert("Button 2 - Clicked");
    };

    const nlceventButton3Click = (name) => {
        alert("name:" + name);
    };
    return (
        <div className="">
            <button className="btn btn-primary" onClick={nlceventButton1Click}> Button 1 </button>
            <button className="btn btn-success" onClick={nlceventButton2Click}> Button 2 </button>
            <button className="btn btn-success" onClick={()=>nlceventButton3Click("linh chi")}> Button 3 </button>
            <button className="btn btn-success" onClick={()=>nlceventButton3Click("nguyen linh chi")}> Button 4 </button>
            
        </div>
    );
}
