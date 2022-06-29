import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
     msg: message, 
     type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
        <Navbar title="My React Application" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </div>
    </>
  );
}

export default App;
