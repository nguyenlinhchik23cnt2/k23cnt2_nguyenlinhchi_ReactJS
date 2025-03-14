import React, { useState, useEffect } from 'react'

export default function NlcUseEffect() {
    // State 
    const [NlcCount, setNlcCount] = useState(0);

    // useEffect sử dụng 1 tham số: Được thực hiện mối khi Render / Re-Render 
    useEffect(() =>{
        console.log("Đây là useEffect 1 tham số");
    });

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => Được gọi duy nhất một lần khi Render 
    useEffect(() =>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");
    }, []);

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối số phụ thuộc  //
    // => Được gọi mỗi khi đối số thay đổi 
    // Khởi tạo state là một mảng  
        const NlcArr = [10, 12, 20, 22];
        const [NlcArray, setNlcArray] = useState(NlcArr);
    useEffect(() =>{
            console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng các đối số phụ thuộc [NlcArray]");
        }, [NlcArray]);

    useEffect(() =>{
            console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng [NlcCount]");
        }, [NlcCount]);
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng 
    const NlcHandleAddList = () => {
        setNlcArray([
            ...NlcArray,
            parseInt(Math.random() * 100),
        ])
    };

  return (
    <div className='alert alert-info'>
      <h2>Demo useEffect </h2>
      <h3>Count : {NlcCount}</h3>
      <button onClick={() => setNlcCount(NlcCount + 1)}>Click Here ! </button>

      <div>
        <h3>Array: {NlcArray.toString()}</h3>
        <button onClick={NlcHandleAddList}>Thêm </button>
      </div>
    </div>
  )
}