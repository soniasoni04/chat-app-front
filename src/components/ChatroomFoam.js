import React,{Component} from 'react';
import * as request from 'superagent';
import {url} from '../constants'

class ChatroomFoam extends Component {

state={
    message : " "
}

onChange=(event)=>{
    console.log("onchange")
    this.setState({
        message : event.target.value
    })
}

onSubmit=(event)=>{
    event.preventDefault()
    console.log("onsubmit of chatroomfoam")
    request.post(`${url}/message`)
    .send({message : this.state.message}) //sending data to table 
    .catch(error => console.log("got error : ", error))

    this.setState({
        message : " "
    })
}

render(){
        return (
            <div>
            <h2> Type your messages here : </h2>
                <form onSubmit={this.onSubmit}>
                    <input 
                        name="messageform"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.message}
                        placeholder="TypeYourMessageHere"
                    />
                    <input type="Submit" />
                    
                </form>
                
            </div>
            
          );
    }
  
}

export default ChatroomFoam;
