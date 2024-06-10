import './App.css';
import React, { useState, useEffect } from 'react';
import Popup from './pages/Popup';
import Navbar from './componunts/Navbar';
import Allroutes from './pages/Allroutes';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
      setShowPopup(true);
  }, []);

  const handleClose = () => {
      setShowPopup(false);
  };
  return (
    <div>
       <div className="App">
            {showPopup && <Popup handleClose={handleClose} />}
        </div>
    <Navbar/>  
    <Allroutes />
    </div>
  );
}

export default App;
