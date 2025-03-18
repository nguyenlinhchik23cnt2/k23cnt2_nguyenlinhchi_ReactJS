import React from 'react';
import NlcApilocal from './Components/NlcApilocal';
import NlcMokapi from './Components/NlcMokapi';
import NlcCreateMokapi from './Components/NlcCreateMokapi';



export default function NlcApp(){
  return(
    <div className='container border my-3 p-3'>
        <h1> ReactJS -API - Nguyễn Linh Chi-K23CNT2 </h1>
          <hr/>
          <NlcApilocal/>
          <h2> doc du lieu tu mokapi</h2>
          <NlcMokapi/>
          <NlcCreateMokapi/>
    </div>
  )
}
