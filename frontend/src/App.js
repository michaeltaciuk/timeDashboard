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
  
  
  return (
    <div className="App">
      <Header/>
      <Fragment>
        
        <div className="App-header">
          <ElapsedTimeBar/>
          <Clock/>
          <a>Current Session</a>
          <Stopwatch/>
          <section class="columns">
	          <div class="column murmer">
              <h2>1st Content Area</h2> 
              <embed src="https://asoftmurmur.com/"></embed>
	          </div>	
	          <div class="column pomodoro">
		          <h2>2nd Content Area</h2>
              <embed src="https://pomofocus.io/app"></embed>
		        </div>
          </section>	
          
          
        </div>
        <Sidebar/>
      </Fragment> 
    </div>
  );
}



export default App;
