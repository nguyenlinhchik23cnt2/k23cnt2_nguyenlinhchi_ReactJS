import React, { Component } from 'react';
import NlcControl from './components/NlcControl';
import NlcStudentList from './components/NlcStudentList';
import NlcForm from './components/NlcForm';

class NlcApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          NLCStudents: [
            { NLCid: 'SV001', NLCName: 'Nguyễn Văn A', NLCAge: 20, NLCGender: 'Nam', NLCBirthday: '01/01/2000', NLCBirthPlace: 'HN', NLCAddress: '25 VNP' },
            { NLCid: 'SV002', NLCName: 'Nguyễn Văn B', NLCAge: 21, NLCGender: 'Nam', NLCBirthday: '02/02/2000', NLCBirthPlace: 'HN', NLCAddress: '25 VNP' },
            { NLCid: 'SV003', NLCName: 'Nguyễn Văn C', NLCAge: 22, NLCGender: 'Nam', NLCBirthday: '03/03/2000', NLCBirthPlace: 'HN', NLCAddress: '25 VNP' },
            { NLCid: 'SV004', NLCName: 'Nguyễn Văn D', NLCAge: 23, NLCGender: 'Nam', NLCBirthday: '04/04/2000', NLCBirthPlace: 'HN', NLCAddress: '25 VNP' },
          ],
          NLCStudent: {
            NLCid: '',
            NLCName: '',
            NLCAge: '',
            NLCGender: '',
            NLCBirthday: '',
            NLCBirthPlace: '',
            NLCAddress: ''
          },
          isEdit: false,
        };
      }
    
      NLCHandleView = (NLCStudent) => {
        console.log("Viewing student:", NLCStudent);
        this.setState({
          NLCStudent: NLCStudent,
        });
      };
    
      NLCHandleDelete = (NLCid) => {
        console.log("Deleting student with ID:", NLCid);
        this.setState({
          NLCStudents: this.state.NLCStudents.filter(student => student.NLCid !== NLCid)
        });
      };
    
      NLCHandleAdd = (newStudent) => {
        console.log("Adding new student:", newStudent);
        this.setState({
          NLCStudents: [...this.state.NLCStudents, newStudent]
        });
      };
    
      NLCHandleEdit = (editedStudent) => {
        console.log("Editing student:", editedStudent);
        this.setState({
          NLCStudents: this.state.NLCStudents.map(student => 
            student.NLCid === editedStudent.NLCid ? editedStudent : student
          ),
          isEdit: false,
          NLCStudent: {
            NLCid: '',
            NLCName: '',
            NLCAge: '',
            NLCGender: '',
            NLCBirthday: '',
            NLCBirthPlace: '',
            NLCAddress: ''
          },
        });
      };
    
      NLCHandleEditMode = (NLCStudent) => {
        console.log("Switching to edit mode for student:", NLCStudent);
        this.setState({
          NLCStudent: NLCStudent,
          isEdit: true,
        });
      };
    render() {
        console.log("Current state - NLCStudent:", this.state.NLCStudent, "isEdit:", this.state.isEdit);
        return (
            <div>
        <h1 className='text-center'>Nguyễn Linh Chi - K23CNT2 - Mini Project</h1>
        <section className='container-fluid'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NlcControl/>
                <NlcStudentList
                  renderNLCStudents={this.state.NLCStudents} 
                  onNLCHandleView={this.NLCHandleView} 
                  onNLCHandleDelete={this.NLCHandleDelete}
                  onNLCHandleEditMode={this.NLCHandleEditMode}
                />
              </div>
            </div>
            <div className="col-5 grid-margin">
              <NlcForm 
                renderNLCStudent={this.state.NLCStudent}
                isEdit={this.state.isEdit} 
                onNLCHandleAdd={this.NLCHandleAdd} 
                onNLCHandleEdit={this.NLCHandleEdit}
              />
            </div>
          </div>
        </section>
      </div>
        );
    }
}

export default NlcApp;
