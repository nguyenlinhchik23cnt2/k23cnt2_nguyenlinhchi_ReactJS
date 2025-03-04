import React, { Component } from 'react';
import Nlclogincontrol from './components/Nlclogincontrol';
import NlcRender from './components/NlcRender';
import NlcRenderListStudent from './components/NlcRenderListStudent';

class NlcApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'> Nguyễn linh chi _ Render condition, list key </h1>
        <hr/>
        <Nlclogincontrol/>
        <NlcRender/>
        <NlcRenderListStudent/>
      </div>
    );
  }
}

export default NlcApp;


