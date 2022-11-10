import './App.css';
import Header from './components/Header.js';
import Stopwatch from "./components/Stopwatch";
import React, { Fragment } from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }

  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {this.setState({ date: new Date() });}, oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

}

function App() {
  
  return (
    <div className="App">
      <Fragment>
        <div className="App-header">
          <Clock/>
          <Stopwatch/>
        </div>
        <p>We dont allow editing of the history of tacked time so that you dont get into the habbit 
          of forgeting to track you time and then retroactivly edit your time spent to what you think 
          it was. This will inevitably be inacurate and hide from you where your time is being 
          unkowingly wasted. Which is contraty to the whole point of traching your time.
        </p>
      </Fragment> 
      <Header/>
    </div>
  );
}



export default App;
