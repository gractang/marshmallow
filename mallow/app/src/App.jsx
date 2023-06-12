import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello there",
      sender: "GPT Clone"
    }
  ]);

  const handleSend = async (message) => {
    
    const newMessage = {
      message: message,
      sender: "User",
      direction: "outgoing"
    }

    // Create new array with previous messages + new message
    const newMessages = [...messages, newMessage];

    // Update messages state
    setMessages(newMessages);

    // Set typing indicator
    setTyping(true);

    // Get GPT-X/LLaMA response

    // Reset typing indicator
    setTyping(false);
  };

  return (
    <div className="App">
      <div style={{position: "relative", height: "800px", width: "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList typingIndicator={typing ? <TypingIndicator content="Tutor is typing"/> : null} >
              {messages.map((message, index) => {
                return <Message key={index} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App
