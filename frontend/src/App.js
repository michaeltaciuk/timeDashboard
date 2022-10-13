import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar';
import Stopwatch from "./components/Stopwatch";
import ElapsedTimeBar from './components/ElapsedTimeBar';
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
  
  var timeSpentArray = [
    {
      "name": "Sleep",
      "color": "Blue",
      "seconds": 28800
    },
    {
      "name": "Work",
      "color": "Red",
      "seconds": 14400
    }
  ]

  return (
    <div className="App">
      <Header/>
      <ElapsedTimeBar timeSpent={timeSpentArray} />
      <Fragment>
        <div className="App-header">
          <Clock/>
          <a>Change Current Task:</a>
          <Stopwatch/>



          <br/>
          <section class="columns">
	          <div class="column murmer">
              <embed src="https://asoftmurmur.com/"></embed>
	          </div>	
	          <div class="column pomodoro">
              <embed src="https://pomofocus.io/app"></embed>
		        </div>
          </section>	
        </div>
      </Fragment> 
    </div>
  );
}



export default App;
