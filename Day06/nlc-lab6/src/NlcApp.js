import React, { Component } from 'react';
import NlcEventForm1 from './components/NlcEventForm1';
import NlcEventForm2 from './components/NlcEventForm2';
import NlcEventForm3 from './components/NlcEventForm3';
import NlcEventForm4 from './components/NlcEventForm4';
import NlcEventForm5 from './components/NlcEventForm5';

class NlcApp extends Component {

    // Hàm xử lý nhận dữ liệu từ form student
  nlcHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bgwhite'>
        <h1 className='text-center'>Event Form-Dome</h1>
        <hr/>
          <NlcEventForm1/>
          <NlcEventForm2/>
          <NlcEventForm3/>
          <NlcEventForm4/>
          <NlcEventForm5 onNlcHandleSubmit={this.nlcHandleSubmitForm}/>
      </div>
    );
  }
}

export default NlcApp;

