import React from 'react';



export default function  NlcUseState() {
    //
    const [nlcCount, setNlcCount] =usestate(0);
    //
    const nlcArr = [10,12,20,22];
   

    const [nlcArray,setNlcArray] = usestate(nlcArr);
    //
    const nlcStudents = [
        {nlcID:"SV001",nlcname:"Linh Chi ",nlcAge:20},
        {nlcID:"SV002",nlcname:"Linh Chi ",nlcAge:20}
    ];
    const [nlcstudentList,setNlcStudentList] = useState(nlcStudents);
    return (
        <div className='alert alert-danger'>
                <h2>useState Demo </h2>
                <div>
                    <h3>Count: {nlcCount}</h3>
                    <button> Tang +</button>
                    <button>Giam -</button>
                </div>
                <div>
                    <h3> Array: {nlcArray.toString()}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>Nam</th>
                                <th>Age</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
