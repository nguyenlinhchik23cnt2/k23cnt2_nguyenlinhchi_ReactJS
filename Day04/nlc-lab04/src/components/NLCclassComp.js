import React,{Component} from 'react';

class NLCclassComp extends Component {
    constructor(props){
        super(props);
        // khoi taoj state
        this.state = {
            fullname:"linh chi ",
            age:20,
            phone:"0366xxxxxx",
        }
    }
    //ham xu ly di lieu
    changeInfo =(ev)=>{
        // cap nhap state
        this.setState({
            fullname:"nguyen linh chi"
        });
    }
    render()
    {
        let  users = this.props.renderUsers;
        console.log('========================');
        console.log(users);
        console.log('========================');
        return (
            <div className='alert alert-success'>
                <h2> trinh bay du lieu tu state</h2>
                <p> info state:{this.state.fullname}</p>
                <p>info state (age):{this.state.age}</p>
                <p>info state (phone):{this.state.phone}</p>

                <hr/>
                <button className='btn btn-primary' onclick={this.changeInfo}> change Info </button>
                <hr/>
                <h3> lay du lieu tu props</h3>
                <p>Name: {this.props.renderName}</p>

               <p>fullname:{this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
               <p>age{this.props.renderUsers ?this.props.renderUsers.age:''}</p>
               <p>phone:{this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
            </div>
        );
    }
}

export default NLCclassComp;
