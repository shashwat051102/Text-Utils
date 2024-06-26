
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setalert(null)
    }, 3000)
  }



  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success")
      document.title = 'TextUtils - Light Mode';

    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils - Dark Mode'

    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={Mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
              }
            ></Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter Text to analyze "mode={Mode}/>

        </div>
      {/* </BrowserRouter> */}
    </>

  );
}

export default App;

