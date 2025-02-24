import React, { Component } from 'react';
import Nlcfuncevent1 from './components/Nlcfuncevent1';
import NlcClasscompEvent1 from './components/NlcClasscompEvent1';
import NlcfunccompEvent from './components/NlcfunccompEvent';
import NlcClasscompEventprops from './components/NlcClasscompEventprops';
import NlcClasscompEventState from './components/NlcClasscompEventState';
import NlcClasscompdata from './components/NlcClasscompdata';



class NLCApp extends Component {
  // ham xu ly su kien khi component con chuyen du lieu len
  nlcHandleDataToApp = (content)=>{
    alert(content);
  }
  render() {
    return (
      <div className='container border mt-3'> 
        <h1 className='text-center alert alert-info my-2'>
          Nguyen Linh Chi K23CNT2 - Event and Form
        </h1>
        <hr/>
        <div>

          <h2> Function components - Event </h2>
            <Nlcfuncevent1 /> 
        </div>
        <hr/>
        <div>
          <h2> class components Event</h2>
          <NlcClasscompEvent1/>
        </div>

        <div>
          <h2> function components Event;props</h2>
          <NlcfunccompEvent nlcRenderName="nguyen linh chi"/>
        </div>

        <div>
          <h2> class components Event;props</h2>
         <NlcClasscompEventprops nlcRenderTitle ="welcome to linh chi"/>
        </div>

        <div>
          <h2> class component Event;state</h2>
          <NlcClasscompEventState/>
        </div>
        <div>
           <h2> class component Event Data to app</h2>
           <NlcClasscompdata onNlcDatatoapp={this.nlcHandleDataToApp}/>
        </div>
      </div>
    );
  }
}

export default NLCApp;

