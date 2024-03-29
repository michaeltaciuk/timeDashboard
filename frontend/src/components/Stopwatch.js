import React, { Fragment } from 'react';
import ElapsedTimeBar from './ElapsedTimeBar';
import "./Stopwatch.css";
import TextClock from './TextClock.js';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SuccessfulSchedules from './SuccessfullSchedules';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      currentSec: 0,
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
      ],
      timeTotals: [
      ]
    };
  }

  componentDidMount() {
    //this.setHistoryState();

    // this.setState({ running: true });
    this.watch = setInterval(() => this.pace(), 10);

    var d = new Date();
    var seconds = Math.floor((d.getSeconds()) + (d.getMinutes() * 60) + (d.getHours() * 3600));

    this.setState(prev => ({
      timeChunks: [...prev.timeChunks, { name: "Sleep In", color: "#424242", started: prev.currentTaskStarted, seconds: (seconds - prev.currentTaskStarted) }]
    }))
    this.setState(prev => ({ currentTaskStarted: seconds }));
  }

  setHistoryState = () => {
    if (localStorage.timeChunks) {
      this.setState({ timeChunks: localStorage.timeChunks });
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

  formatTime = (sec) => {
    const date = new Date(null);
    date.setSeconds(sec);
    if (sec > 3600) {
      return date.toISOString().slice(11, 19);
    } else {
      return date.toISOString().slice(14, 19);
    }
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
      var td = new Date();
      var ts = Math.floor((td.getSeconds()) + (td.getMinutes() * 60) + (td.getHours() * 3600));
      this.setState({ currentSec: ts });
      
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  newTimeChunk = (TaskName, color) => {
    // this.setState({ running: false });
    // clearInterval(this.watch); 
    console.log(TaskName);
    console.log(this.state.currentTask);
    var d = new Date();
    var s = Math.floor((d.getSeconds()) + (d.getMinutes() * 60) + (d.getHours() * 3600));

    this.setState(prev => ({
      timeChunks: [...prev.timeChunks, { name: prev.currentTask, color: prev.currentColor, started: prev.currentTaskStarted, seconds: (s - prev.currentTaskStarted) }]
    }), () => {console.log(this.state.timeChunks)});
    //this.saveTime();
  
    this.setState({ 
      currentColor: color,
      currentTask: TaskName,
      currentTaskStarted: s 
    }, () => {console.log(this.state.currentTask)});
    
    
    // var sums = {};
    // for (var key in this.state.timeChunks){
    //   var currentChunk = this.state.timeChunks[key];
    //   var Chunkname = currentChunk.name;

    //   if (sums.hasOwnProperty(Chunkname)){
    //     sums[key] += currentChunk.seconds;
    //   }
    //   else {
    //     sums[key] = {name: Chunkname, seconds: currentChunk.seconds};
    //   }
    // }
    // var timeTotals = [];
    // for (var name in sums){
    //   console.log(name);
    //   timeTotals.push({name: sums[name].name, minutes: sums[name].seconds/60});
    // }
    // this.setState({ timeTotals: timeTotals});

    // this.setState({
    //   currentTimeMs: 0,
    //   currentTimeSec: 0,
    //   currentTimeMin: 0,
    // });

    // this.setState({ running: true });
    // this.watch = setInterval(() => this.pace(), 10);
  }

  render() {

    const renderLineChart = (
      <BarChart width={600} height={400} data={this.state.timeTotals}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <XAxis dataKey="name"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="minutes" fill="#5baefb" />

      </BarChart>
    );

    const renderTaskButton = (name, color) => {
      <div className='grid-item'>
        <button className='start-task-button'
          style={{ background: this.state.currentTask === name ? color : buttonOffColor }}
          onClick={() => this.newTimeChunk(name, color)}>
          {this.state.currentTask === name ? name : `Start ${name}`}</button>
      </div>
    };

    const elapsedTime = this.formatTime(this.state.currentSec - this.state.currentTaskStarted);

    const buttonOffColor = "#334E68";

    return (
      <Fragment>
        <br />
        <div className="timeScale" style={{ width: "100vw" }}>
          <div className="timeScaleText">12am</div>
          <div className="timeScaleText" style={{ left: "16.67vw", position: "absolute", fontSize: "small" }}>4am</div>
          <div className="timeScaleText" style={{ left: "33.33vw", position: "absolute", fontSize: "small" }}>8am</div>
          <div className="timeScaleText" style={{ left: "50vw", position: "absolute", fontSize: "small" }}>12pm</div>
          <div className="timeScaleText" style={{ left: "66.67vw", position: "absolute", fontSize: "small" }}>4pm</div>
          <div className="timeScaleText" style={{ left: "83.33vw", position: "absolute", fontSize: "small" }}>8pm</div>
        </div>
        <div className='time-bar'>
          <ElapsedTimeBar timeChunks={this.state.timeChunks} />
        </div>

        <br />

        {/* <TextClock /> */}

        <div className='button-container'>
          
          <div className='grid-container'>
            <div className='grid-item'>
              <button className='start-task-button'
                style={{ background: this.state.currentTask === "Work" ? "green" : buttonOffColor }}
                onClick={() => this.newTimeChunk("Work", "green")}>
                {this.state.currentTask === "Work" ? `Currently Working: ${elapsedTime}` : "Start Work"}</button>
            </div>
            <div className='grid-item'>
              <button className='start-task-button'
                style={{ background: this.state.currentTask === "Break" ? "#900D09" : buttonOffColor }}
                onClick={() => this.newTimeChunk("Break", "#900D09")}>
                {this.state.currentTask === "Break" ? `Currently on Break: ${elapsedTime}` : "Start Brake"}</button>
            </div>
            <div className='grid-item'>
              <button className='start-task-button'
                style={{ background: this.state.currentTask === "Eat" ? "#AF601A" : buttonOffColor }}
                onClick={() => this.newTimeChunk("Eat", "#AF601A")}>
                {this.state.currentTask === "Eat" ? `Currently Eating: ${elapsedTime}` : "Start Eating"}</button>
            </div>
            <div className='grid-item'>
              <button className='start-task-button'
                style={{ background: this.state.currentTask === "Exercise" ? "#14AF77" : buttonOffColor }}
                onClick={() => this.newTimeChunk("Exercise", "#14AF77")}>
                {this.state.currentTask === "Exercise" ? `Currently Exercising: ${elapsedTime}` : "Start Exercising"}</button>
            </div>
            <div className='grid-item'>
              <button className='start-task-button'
                style={{ background: this.state.currentTask === "Read" ? "purple" : buttonOffColor }}
                onClick={() => this.newTimeChunk("Read", "purple")}>
                {this.state.currentTask === "Read" ? `Currently Reading: ${elapsedTime}` : "Start Reading"}</button>
            </div>
            <div className='grid-item'>
              <button className='start-task-button'
                style={{ background: this.state.currentTask === "Sleep" ? "#21618C" : buttonOffColor }}
                onClick={() => this.newTimeChunk("Sleep", "#21618C")}>
                {this.state.currentTask === "Sleep" ? `Currently Sleeping: ${elapsedTime}` : "Start Sleeping"}</button>
            </div>
          </div>
          {/* <div className="barchart">{renderLineChart}</div> */}
        </div>

        <SuccessfulSchedules />


      </Fragment>
    );
  }
}

export default Stopwatch;

//{this.state.timeChunks.map((item, index) => <li key={index}>{item.name}</li>)}