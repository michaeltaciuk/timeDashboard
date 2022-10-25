import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import StopwatchDisplay from './StopwatchDisplay.js';
import ElapsedTimeBar from './ElapsedTimeBar';
import StopwatchHistory from './StopwatchHistory.js';
import "./stopwatch.css";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
      timeChunks: [
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
    };
  }

  componentDidMount() {
    //this.setHistoryState();
    console.log(this.state.timeChunks);
    this.setState({ running: true });
    this.watch = setInterval(() => this.pace(), 10);
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

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  newTimeChunk = (name, color) => {
    this.setState({ running: false });
    clearInterval(this.watch); 

    var seconds = Math.floor((this.state.currentTimeMs/1000) + (this.state.currentTimeSec) + (this.state.currentTimeMin*60));
    this.setState(prev => ({
      timeChunks: [...prev.timeChunks, {name: name, color: color, seconds: seconds}]
    }))
    
    console.log(this.state.timeChunks);

    //this.saveTime();

    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });

    this.setState({ running: true });
    this.watch = setInterval(() => this.pace(), 10);
  }

  render() {
    return (
      <Fragment>
        <div className='time-bar'>
          <ElapsedTimeBar  timeChunks={this.state.timeChunks} />
        </div>
        <br/>
        <button onClick={this.reset}>RESET</button>
        <div className='grid-container'>
          <div className='grid-item'>
            <button onClick={() => this.newTimeChunk("Work", "blue")}>Work</button>
          </div>
          <div className='grid-item'>
            <button onClick={() => this.newTimeChunk("Break", "gray")}>Break</button>
          </div>
          <div className='grid-item'>
            <button onClick={() => this.newTimeChunk("Eat", "green")}>Eat</button>
          </div>
          <div className='grid-item'>
            <button onClick={() => this.newTimeChunk("Exercise", "red")}>Exercise</button>
          </div>
          <div className='grid-item'>
            <button onClick={() => this.newTimeChunk("Read", "yellow")}>Read</button>
          </div>
          <div className='grid-item'>
            <button onClick={() => this.newTimeChunk("Sleep", "black")}>Sleep</button>
          </div>
        </div>
        
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />

        <div className={'stopwatch__history'}>
          <button onClick={this.saveTime}>SAVE TIME</button>
          <button onClick={this.resetHistory}>RESET HISTORY</button>
          <ul>
            
          </ul>
        </div>

      </Fragment>
    );
  }
}

export default Stopwatch;


//Edit History Info Button
//We dont allow editing of the history of tacked time so that you dont get into the habbit
//of forgeting to track you time and then retroactivly edit your time spent to what you think 
//it was. This will inevitably be inacurate and hide from you where your time is being unkowingly
//wasted. Which is contraty to the whole point of traching your time.

//{this.state.timeChunks.map((item, index) => <li key={index}>{item.name}</li>)}