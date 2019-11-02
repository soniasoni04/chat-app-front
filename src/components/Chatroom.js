import React,{Component} from 'react';
import { url} from '../constants'
import {connect} from 'react-redux'
import {addMessages} from '../actions'

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
        this.props.addMessages(messages)
         
        //this.props.dispatch(addMessages(messages))
        
        this.setState({
            messages
        })
    };
    console.log("source ", this.source)
}

    render(){
        console.log("local state : ", this.props)
        if(!this.props.messages) return "wait for messages"

        return <div>
            <ul>
               {
                   this.props.messages.map(message => <li key={message.id} > {message.message}</li>)
               }
               </ul>   
            </div>
    }
  
}
function mapStateToProps (reduxState) {
    console.log("redux state : ", reduxState)
    return {
        messages : reduxState.messages
    }
}

const mapDispatchToProps = {addMessages}


export default connect(mapStateToProps, mapDispatchToProps) (Chatroom);
