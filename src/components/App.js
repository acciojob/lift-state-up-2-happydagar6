import React, { useState } from 'react';

// ==========================================
// 2. CHILD COMPONENT (The Worker)
// ==========================================
// Ye parent se 'inputValue' aur 'setInputValue' (remote control) receive kar raha hai
const ChildComponent = ({ inputValue, setInputValue }) => {
  return (
    // REQUIRED: className "child"
    <div className="child" style={{ backgroundColor: '#d9642c', padding: '20px', marginTop: '20px' }}>
      <h2>Child Component</h2>
      
      {/* Jab user type karega, onChange trigger hoga */}
      {/* e.target.value wo naya text hai jo user ne type kiya hai */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        style={{ padding: '5px', fontSize: '16px' }}
      />
    </div>
  );
};


// ==========================================
// 1. PARENT COMPONENT (The Boss)
// ==========================================
const App = () => {
  // Yahan humne State banayi hai. Shuru mein ye khali string '' hai.
  const [inputValue, setInputValue] = useState('');

  return (
    // REQUIRED: className "parent"
    <div className="parent" style={{ backgroundColor: '#8dfb15', padding: '30px', fontFamily: 'sans-serif', height: '100vh' }}>
      
      <h1>Parent Component</h1>
      
      {/* Yahan hum Parent ke andar current state dikha rahe hain */}
      <p>{inputValue}</p>
      
      {/* Child ko bula rahe hain aur usko state & remote control dono pass kar rahe hain */}
      <ChildComponent 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
      />
      
    </div>
  );
};

export default App;