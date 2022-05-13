//  import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#01212c';
      showAlert("Dark mode has been enabled","success")
    }
    else {
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Textutils" home="Home" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container mt-3" >
      <TextForm showAlert={showAlert} heading="Enter the text to analise" mode={mode}></TextForm>
      </div>
    

    </>
  );
}

export default App;
