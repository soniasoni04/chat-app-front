import React,{Component} from 'react';
import * as request from 'superagent';
import {url} from '../constants'


export default class Signup extends Component {

    state ={
        username : " ",
        password : " "
    
    }
    onChangeUsername=(event) =>{
        console.log("onchange user name" )
        this.setState({
            username : event.target.value
        })
    }
    onChangePassword =(event)=>{
        console.log("password change")
        this.setState({
            password: event.target.value
        })
    }

    onSubmit =(event)=>{
        event.preventDefault()
        console.log("try to sign up : ", this.state.username, "and", this.state.password)
        request.post(`${url}/user`)
        .send({
            email: this.state.username,
            password: this.state.password
        })
        .catch(error => console.log("error", error))
    }
    render(){
        return  (
            <div>
            <h2>Signup : </h2>
                <form onSubmit={this.onSubmit}>
                    UserName: 
                    <input 
                        name="username"
                        type="text"
                        onChange={this.onChangeUsername}
                        value={this.state.username}
                        placeholder="username"
                    />
                    Password:
                    <input 
                    name="password" 
                    type="text"
                    onChange={this.onChangePassword}
                    value={this.state.password}
                    placeholder="password"
                    /> 
                    
                    <input type="Submit" />
                    
                </form>
                
            </div>
            
          );
    }
}