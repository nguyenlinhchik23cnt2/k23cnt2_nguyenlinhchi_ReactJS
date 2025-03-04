import React, { Component } from 'react';
import NlcloginComp from './NlcloginComp';
import NlclogoutComp from './NlclogoutComp';

class Nlclogincontrol extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoggedIn:false,
        }
    }
    // ham su ly 
    nlcHandleLogin =(event)=>{
        event.preventDefault();
        this.setState(
            {
                isLoggedIn:true,
            }
        )
    }
    render() {
        let {isLoggedIn}=this.state
        let nlcElement = isLoggedIn?<NlcloginComp/> : <NlclogoutComp/>

        
        return (
            <div className='alert alert-danger'>
                {nlcElement}
                    
                {
                    isLoggedIn?
                    <button>Logout</button>
                    :<button onClick={this.nlcHandleLogin}> login</button>
                }

            </div>
        );
    }
}

export default Nlclogincontrol;
