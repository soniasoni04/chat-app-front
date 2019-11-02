import React from 'react';
import Chatroom from './components/Chatroom';
import Chatroomfoam from './components/ChatroomFoam'
import Signup from './components/Signup'
import Login from './components/login'


function App() {
  return (
    <div>
    <h1> Sonia Chat App </h1>
    <Chatroom />
    <Chatroomfoam />
    <Signup />
    <Login />
    </div>
    
  );
}

export default App;
