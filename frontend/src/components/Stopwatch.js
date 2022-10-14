import React from 'react';
import ReactDOM from 'react-dom';
import StopwatchDisplay from './StopwatchDisplay.js';
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
    };
  }

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

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
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

  newTimeChunk = () => {
    this.setState({ running: false });
    clearInterval(this.watch);

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
      <div className='Container'>
        {this.state.running === false && (
          <button onClick={this.start}>START</button>
        )}
        {this.state.running === true && (
          <button onClick={this.stop}>STOP</button>
        )}
        <button onClick={this.reset}>RESET</button>
        <div className='grid-container'>
          <div className='grid-item'>
            <button onClick={this.newTimeChunk}>Work</button>
          </div>
          <div className='grid-item'>
            <button onClick={this.newTimeChunk}>Break</button>
          </div>
          <div className='grid-item'>
            <button onClick={this.newTimeChunk}>Eat</button>
          </div>
          <div className='grid-item'>
            <button onClick={this.newTimeChunk}>Exercise</button>
          </div>
          <div className='grid-item'>
            <button onClick={this.newTimeChunk}>Read</button>
          </div>
          <div className='grid-item'>
            <button onClick={this.newTimeChunk}>Sleep</button>
          </div>
        </div>
        
        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />
      </div>
    );
  }
}

export default Stopwatch;


//Edit History Info Button
//We dont allow editing of the history of tacked time so that you dont get into the habbit
//of forgeting to track you time and then retroactivly edit your time spent to what you think 
//it was. This will inevitably be inacurate and hide from you where your time is being unkowingly
//wasted. Which is contraty to the whole point of traching your time.