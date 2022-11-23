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
        <p>
          We dont allow editing of the history of tracked time so that you dont get into the habbit 
          of forgeting to track your time and then retroactively editing your history to what you think 
          it was. This will inevitably be inaccurate and hide from you where your time is being 
          unknowingly wasted. Which is contrary to the goal of tracking your time.
        </p>
        <br/>
      </Fragment> 
    </div>
  );
}



export default App;
