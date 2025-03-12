import React, { Component } from 'react';
import NlcMemberAdd from './Component/NlcMemberAdd';
import NlcMemberList from './Component/NlcMemberList';

class NlcApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      NLCMembers: [
        {
          "NLCid": "SV001",
          "NLCFullname": "Nguyễn Văn A",
          "NLCUsername": "nguyenvana",
          "NLCPassword": "123456"
        },
        {
          "NLCid": "SV002",
          "NLCFullname": "Trần Thị B",
          "NLCUsername": "tranthib",
          "NLCPassword": "abcdef"
        },
        {
          "NLCid": "SV003",
          "NLCFullname": "Lê Hoàng C",
          "NLCUsername": "lehoangc",
          "NLCPassword": "hoangc789"
        },
        {
          "NLCid": "SV004",
          "NLCFullname": "Phạm Minh D",
          "NLCUsername": "phamminhd",
          "NLCPassword": "minhd@321"
        },
        {
          "NLCid": "SV005",
          "NLCFullname": "Đặng Quốc E",
          "NLCUsername": "dangquoce",
          "NLCPassword": "pass1234"
        }
      ],
      NLCMember: {
        NLCid: '',
        NLCFullname: '',
        NLCUsername: '',
        NLCPassword: '',
      },
      isEdit: false,
    };
  }

  

  render() {

    console.log("Current state - NLCMember:", this.state.NLCMember, "isEdit:", this.state.isEdit);
    return (
      <div>
        <h1 className='text-center'>Nguyễn Linh Chi-2310900014-K23CNT2-exam</h1>
        <section className='container-fluid'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NlcMemberAdd/>
                <NlcMemberList
                  renderNLCMembers={this.state.NLCMembers} 
                  onNLCHandleView={this.NLCHandleView} 
                  onNLCHandleDelete={this.NLCHandleDelete}
                  onNLCHandleEditMode={this.NLCHandleEditMode}
                />
              </div>
            </div>
            
          </div>
        </section>
      </div>
    );
  }
}

export default NlcApp;
