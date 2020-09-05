import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ currentTime, setCurrentTime ] = useState("");
  useEffect(() => {
     fetch('/time')
      .then(res => res.json())
      .then(data => setCurrentTime(data.message))
  }, []);
  return (
    <div className="App">
      Message: {currentTime}
    </div>
  );
}

export default App;
