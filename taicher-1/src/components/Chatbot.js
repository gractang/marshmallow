import React, { useState, ChangeEvent } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function handleSendMessage(input) {
    // Add logic to send user message and receive response from the chatbot
    // Example: Hardcoding a response for demonstration purposes
    const response = 'Hello! How can I assist you?';
    setMessages([...messages, {content: input, sender: 'bot'}, {content: response, sender: 'bot'}]); // { content: response, sender: 'bot' }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input type="text" placeholder="Ask a question..." value={input} onChange={handleChange}/>
        <button onClick={() => handleSendMessage(input)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;