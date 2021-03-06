import logo from './logo.svg';
import logo2 from './stopwatchSmall.png';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './Sidebar';
import Stopwatch from "./components/Stopwatch";
import React, { Fragment } from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
      <Header/>
      <Fragment>
        <div className="App-header">
          <Clock/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
          <a>Current Session</a>
          <Stopwatch/>
        </div>
        <Sidebar/>
      </Fragment> 
    </div>
  );
}



export default App;
