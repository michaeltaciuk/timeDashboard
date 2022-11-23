import './App.css';
import Header from './components/Header.js';
import Stopwatch from "./components/Stopwatch";
import SuccessfulSchedules from './components/SuccessfullSchedules';
import React, { Fragment, useEffect } from 'react';

function App() {

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  
  return (
    <div className="App">
      <Header/>
      <Fragment>
        <div className="App-header">
          {/* <p>"The best time to plant a tree was 20 years ago. The second best time is now."</p> */}
          <Stopwatch/>
        </div>
        <br/>
        <br/>
      </Fragment> 
    </div>
  );
}



export default App;
