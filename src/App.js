
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar';
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
          <a>Current Session</a>
          <Stopwatch/>
        </div>
        <Sidebar/>
      </Fragment> 
    </div>
  );
}



export default App;
