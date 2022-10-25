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
      <Header/>
      
      <Fragment>
        <div className="App-header">
          <Clock/>
          <a>Change Current Task:</a>
          <Stopwatch/>
          <br/>
          <section className="columns">
	          <div className="column murmer">
              <embed src="https://asoftmurmur.com/"></embed>
	          </div>	
	          <div className="column pomodoro">
              <embed src="https://pomofocus.io/app"></embed>
		        </div>
          </section>	
        </div>
      </Fragment> 
    </div>
  );
}



export default App;
