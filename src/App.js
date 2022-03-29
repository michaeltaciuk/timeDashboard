import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './Sidebar';
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
  function startWork(e) {
    e.preventDefault();
    console.log('Start Work Now');
  }
  
  return (
    <div className="App">
      <Header/>
      <Fragment>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
          <button onClick={startWork}>Work</button>
        </div>
        <Sidebar/>
      </Fragment> 
    </div>
  );
}



export default App;
