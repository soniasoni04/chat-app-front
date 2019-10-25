import React,{Component} from 'react';
import { url} from '../constants'

class Chatroom extends Component {
    
    state ={
        messages : []
    }
    source = new EventSource(`${url}/stream`)

componentDidMount(){
    
    console.log("url is :", url)
    console.log("componentDidMount chatroom components", this.source)

    this.source.onmessage = event => {
        console.log(" Got a message ! ", event)
        const messages = JSON.parse(event.data);
        
        
        this.setState({
            messages
        })
    };
    console.log("source ", this.source)
}

    render(){
        console.log("local state : ", this.state)

        return <div>
            <ul>
               {
                   this.state.messages.map(message => <li key={message.id} > {message.message}</li>)
               }
               </ul>   
            </div>
    }
  
}

export default Chatroom;
