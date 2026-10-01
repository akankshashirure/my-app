import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
/*import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() =>{
        document.title = 'TextUtil is Amazing Mode';
      }, 2000)
      setInterval(() =>{
        document.title = 'Install TextUtil';
      }, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter text to analyze below" mode={mode}/>} />
      </Routes>
      </div>
      {/* <Switch>
            <Route exact path="/about">
                <About />
            </Route>
      </Switch> ----->>> switch is older version use <Switch> -> <Routes> */}  
    </Router>
    {/*<About/> */}
    
    </>
  );
}

export default App;
