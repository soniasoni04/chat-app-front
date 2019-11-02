import React,{Component} from 'react';
import  * as request from 'superagent'
import {url} from '../constants'
import { connect } from 'react-redux';
import {login} from '../actions'

class Login extends Component {

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
        request.post(`${url}/login`)
        .send({
            email: this.state.username,
            password: this.state.password
        })
        .then(result => {
            console.log("please let it be token : ", result.body)
            this.props.login(result.body.jwt)
        })
        .catch(error => console.log("error", error))
    }
    render(){
        console.log(" login done ", this.props)
        if(this.props.jwt!= "") return "user is logged in : "

        return  (
            <div>
            <h2>Login : </h2>
                <form onSubmit={this.onSubmit}>

                    Username: 
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

function mapStateToProps (reduxState) {
    console.log("redux state : ", reduxState)
    return {
        jwt : reduxState.user

    }
}

export default connect (mapStateToProps, { login}) (Login)