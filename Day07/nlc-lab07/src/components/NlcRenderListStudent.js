import React, { Component } from 'react';

class NlcRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state ={
            nlcStudent:[
                {nlcID:"NTU",nlcName:"Nguyễn Linh Chi ",nlcAge:20,nlcClass:"K23CNT2"},
                {nlcID:"NTU",nlcName:"Nguyễn Linh Chi ",nlcAge:20,nlcClass:"K23CNT2"},
                {nlcID:"NTU",nlcName:"Nguyễn Linh Chi ",nlcAge:20,nlcClass:"K23CNT2"},
            ]
        }
    }
    render() {
        let nlcElement = this.state.nlcStudent.map((nlcitem, index)=>{
            return (
                <tr>
                        <td>{index+1}</td>
                        <td>{nlcitem.nlcID}</td>
                        <td>{nlcitem.nlcName}</td>
                        <td>{nlcitem.nlcAge}</td>
                        <td>{nlcitem.nlcClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2> DAnh sách sinh viên </h2>
                <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th>Stt</th>
                        <th>nlcid</th>
                        <th>nlcname</th>
                        <th>nlcage</th>
                        <th>nlcclass</th>
                        <th> thao tac</th>
                        
                    </tr>
                    </thead>
                        <tbody>
                            {nlcElement}
                        </tbody>
                </table>
            </div>
        );
    }
}

export default NlcRenderListStudent;
