import React from 'react';


export default function NlcRender(){
    const nlclist =[" Nguyễn Linh chi ","reactJS","Fit_Ntu"]
    const nlcElementn = nlclist.map(item=>{
        return <li>{item}</li>
    })
    return(
        <div className='alert alert-success'>
            <h2> Danh Sách </h2>
            <ul>
                {
                    nlclist.map(item=>{
                        return  <li>{item}</li>
                    })
                }
            </ul>
            <hr/>
            {nlcElementn}
        </div>
    )
}

