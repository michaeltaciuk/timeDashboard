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
      </Fragment> 
      <Header/>
    </div>
  );
}



export default App;
