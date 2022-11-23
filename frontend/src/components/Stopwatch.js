import React, { Fragment } from 'react';
import ElapsedTimeBar from './ElapsedTimeBar';
import "./stopwatch.css";
import TextClock from './TextClock.js';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentTaskStarted: 28800,
      currentTask: "Break",
      currentColor: "#900D09",
      timeChunks: [
        {
          "name": "Sleep",
          "color": "#21618C",
          "started": 0,
          "seconds": 28800
        }
      ]
    };
  }

  componentDidMount() {
    //this.setHistoryState();
    
    // this.setState({ running: true });
    // this.watch = setInterval(() => this.pace(), 10);

    var d = new Date();
    var seconds = Math.floor((d.getSeconds()) + (d.getMinutes()*60) + (d.getHours()*3600));

    this.setState(prev => ({
      timeChunks: [...prev.timeChunks, {name: "Sleep In", color: "#424242", started: prev.currentTaskStarted , seconds: (seconds - prev.currentTaskStarted)}]
    }))
    this.setState(prev => ({currentTaskStarted: seconds}));
  }

  setHistoryState = () => {
    if (localStorage.timeChunks) {
      this.setState({ timeChunks: localStorage.timeChunks});
    } else {
      this.setState({ timeChunks: [] });
    }
  };

  saveTime = () => {
    if (typeof Storage !== 'undefined') {
      localStorage.timeChunks = this.state.timeChunks;
    } else {
      console.error('local storage not supported');
    }
    this.setHistoryState();
  };

  resetHistory = () => {
    if (localStorage.timeChunks) {
      localStorage.removeItem('timeChunks');
    }
    this.setHistoryState();
  };

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value;
    }
    return value;
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
      
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  newTimeChunk = (name, color) => {
    // this.setState({ running: false });
    // clearInterval(this.watch); 
    
    var d = new Date();
    var s = Math.floor((d.getSeconds()) + (d.getMinutes()*60) + (d.getHours()*3600));
    console.log(s);

    this.setState(prev => ({
      timeChunks: [...prev.timeChunks, {name: prev.currentTask, color: prev.currentColor, started: prev.currentTaskStarted ,seconds: (s - prev.currentTaskStarted)}]
    }))
    
    //this.saveTime();
    this.setState({ currentColor: color });
    this.setState({ currentTask: name });
    this.setState({ currentTaskStarted: s});

    // this.setState({
    //   currentTimeMs: 0,
    //   currentTimeSec: 0,
    //   currentTimeMin: 0,
    // });

    // this.setState({ running: true });
    // this.watch = setInterval(() => this.pace(), 10);
  }

  render() {
    console.log(this.state.timeChunks);
    return (
      <Fragment>
        <br/>
        <div className="timeScale" style={{ width: "100vw" }}>
          <div className="timeScaleText">12am</div>
          <div className="timeScaleText" style={{ left: "16.67vw", position: "absolute", fontSize: "small"}}>4am</div>
          <div className="timeScaleText" style={{ left: "33.33vw", position: "absolute", fontSize: "small"}}>8am</div>
          <div className="timeScaleText" style={{ left: "50vw", position: "absolute", fontSize: "small"}}>12pm</div>
          <div className="timeScaleText" style={{ left: "66.67vw", position: "absolute", fontSize: "small"}}>4pm</div>
          <div className="timeScaleText" style={{ left: "83.33vw", position: "absolute", fontSize: "small"}}>8pm</div>
        </div>
        <div className='time-bar'>
          <ElapsedTimeBar  timeChunks={this.state.timeChunks} />
        </div>
        
        <br/>
        <TextClock/>

        <div className='grid-container'>
          <div className='grid-item'>
            <button className='start-task-button' 
            style={{ background: this.state.currentTask === "Work" ? "green" : "#334E68" }}
            onClick={() => this.newTimeChunk("Work", "green")}>
            {this.state.currentTask === "Work" ? "Currently Working" : "Start Work"}</button>
          </div>
          <div className='grid-item'>
            <button className='start-task-button' 
              style={{ background: this.state.currentTask === "Break" ? "#900D09" : "#334E68" }} 
              onClick={() => this.newTimeChunk("Break", "#900D09")}>
              {this.state.currentTask === "Break" ? "Currently on Break" : "Start Brake"}</button>
          </div>
          <div className='grid-item'>
            <button className='start-task-button' 
            style={{ background: this.state.currentTask === "Eat" ? "#AF601A" : "#334E68" }} 
            onClick={() => this.newTimeChunk("Eat", "#AF601A")}>
            {this.state.currentTask === "Eat" ? "Currently Eating" : "Start Eating"}</button>
          </div>
          <div className='grid-item'>
            <button className='start-task-button' 
            style={{ background: this.state.currentTask === "Exercise" ? "#14AF77" : "#334E68" }} 
            onClick={() => this.newTimeChunk("Exercise", "14AF77")}>
            {this.state.currentTask === "Exercise" ? "Currently Exercising" : "Start Exercising"}</button>
          </div>
          <div className='grid-item'>
            <button className='start-task-button' 
            style={{ background: this.state.currentTask === "Read" ? "purple" : "#334E68" }} 
            onClick={() => this.newTimeChunk("Read", "purple")}>
            {this.state.currentTask === "Read" ? "Currently Reading" : "Start Reading"}</button>
          </div>
          <div className='grid-item'>
            <button className='start-task-button' 
            style={{ background: this.state.currentTask === "Sleep" ? "#21618C" : "#334E68" }} 
            onClick={() => this.newTimeChunk("Sleep", "#21618C")}>
            {this.state.currentTask === "Sleep" ? "Currently Sleeping" : "Start Sleeping"}</button>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default Stopwatch;

//{this.state.timeChunks.map((item, index) => <li key={index}>{item.name}</li>)}