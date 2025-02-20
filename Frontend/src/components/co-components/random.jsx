
import React, { useState } from 'react';

function Random() {
  const [isSearching, setIsSearching] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const startMatching = () => {
    setIsSearching(true);
    // Simulate matching after 2 seconds
    setTimeout(() => {
      setIsSearching(false);
      setIsMatched(true);
    }, 2000);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChat([...chat, { text: message, sender: 'me' }]);
      setMessage('');
    }
  };

  const endChat = () => {
    setIsMatched(false);
    setChat([]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {!isMatched && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Random Chat</h2>
          <button 
            onClick={startMatching}
            disabled={isSearching}
            style={{ padding: '15px 30px', fontSize: '18px' }}
          >
            {isSearching ? 'Searching for a match...' : 'Find Chat Partner'}
          </button>
        </div>
      )}

      {isMatched && (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <div style={{ 
            height: '400px', 
            overflowY: 'auto',
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px'
          }}>
            {chat.map((msg, index) => (
              <div 
                key={index}
                style={{
                  textAlign: msg.sender === 'me' ? 'right' : 'left',
                  margin: '10px 0'
                }}
              >
                <span style={{
                  backgroundColor: msg.sender === 'me' ? '#007bff' : '#6c757d',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  display: 'inline-block'
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          
          <form onSubmit={sendMessage} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
          </form>
          
          <button 
            onClick={endChat}
            style={{ 
              marginTop: '20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              width: '100%'
            }}
          >
            End Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default Random;
