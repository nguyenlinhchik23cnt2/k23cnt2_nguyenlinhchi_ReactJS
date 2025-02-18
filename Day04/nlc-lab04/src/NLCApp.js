import NLCclassComp from "./components/NLCclassComp";
import NLCFuncComp from "./components/NLCFuncComp";
import NLCFuncComp1 from "./components/NLCFuncComp1";

import React from "react";


function NLCApp() {
  //object
  const users ={
    fullname:'nguyen linh chi',
    age:20,
    phone:"0366xxxxx",
  }
   return (
    <div className="container bordeer mt-3">
      <h1> Demo componnet - Props - State </h1>
      <hr/>
      <div className='alert alert-danger'>
          <NLCFuncComp name="Linh chi " address="25 vũ ngọc phan " company ="Devmaster"/>
          <hr/>
          <NLCFuncComp name="Nguyễn Linh Chi " address="K23CNT2 " company ="NTU "/>
      </div>
      <div className='alert alert-info'>
        <NLCFuncComp1 renderInfo={users}/>
      </div>
      <NLCclassComp/>
      {/*chuyen du lieu tu nlcapp -> xuong nlcclasscomp*/}
      <NLCclassComp rendername="K23CNT2" renderUsers={users}/>
    </div>
  );
}

export default NLCApp;
