import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold">Chatbot</h2>
        </div>
        <div className="p-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="p-4 border-t">
          <input
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            type="text"
            placeholder="Type a message..."
            onKeyDown={(event) => {
              if (event.key === 'Enter' && event.target.value) {
                sendMessage(event.target.value);
                event.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
