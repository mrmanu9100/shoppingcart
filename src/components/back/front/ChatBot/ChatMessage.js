import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className="flex mb-4">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src="https://via.placeholder.com/50"
          alt="Avatar"
        />
      </div>
      <div className="ml-3">
        <div className="bg-gray-100 rounded-lg px-4 py-2">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
