import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextArea from './components/TextArea';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const[mode,setMode]=useState("light");
  const[modetext,setModetext]=useState("light");
 
  const togglemode=()=>{
    if(mode==='light'){
      setMode("dark");
      setModetext('dark');
      document.title="textUtils-dark mode"
      document.body.style.backgroundColor="black"
      document.body.style.color="white";
    }
    else{ setMode("light")
    setModetext('light');
    document.title="textUtils"
    document.body.style.backgroundColor="white"
    document.body.style.color="black";
  }
  }
  const togglemode2 = () => {
    if (mode === 'light') {
      document.title="textUtils-red mode"
      setMode('danger');
      setModetext('dark');
      document.body.style.background = 'linear-gradient(to bottom, #FF0000, rgb(18,16,16))';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      setModetext('light');
      document.title="textUtils"
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }
  };
  
  return (
    <>
    <Router>
   <Navbar title="textUtils" mode={mode} togglemode={togglemode} togglemode2={togglemode2} modetext={modetext} />
   <Routes>
        <Route path="/" element={<TextArea heading="Enter text below" mode={mode} />} />
        <Route path="/about" element={<About />} />
    </Routes>
   </Router>
    </>
  );
}

export default App;
