import React from "react";

export default function nlcJsxExpression(){
    //biến 
    const name="Nguyễn LInh Chi "
    const user ={
        firstName:" Linh chi",
        lastName:"Nguyễn "
    }
    // hàm 
    const fullName=(user)=>{
        return "<h2>" + user.firstName + ' '+ user.lastName + "</h2>";
    }

    //element
    const element =(
        <div>
            {
                fullName(user)
                
            }
            <hr/>
            <h2>{fullName(user)} </h2>
            <hr/>
            <h3> welcome to ,{name}</h3>

        </div>
    );
    // ham
    const sayWelcome = (name )=>{
        if(name){
            return <h3> welcome to {name}</h3>
        }else
        {
            return <h3> welcome   to fit-NTU -K23CNT</h3>
        }
    }
    return (
    <div>
        <h1> NLC - JsxExpression</h1>
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyễn Linh Chi ")}
    </div>
    )
}