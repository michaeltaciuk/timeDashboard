import React from "react";

class TaskTimer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0
    };
  }

  componentDidMount() {
    
    
  } 

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  buttonStart = () => {
    console.log('Start Work Now');
    this.intervalID = setInterval(() => {this.setState({ elapsed: this.state.elapsed + 1 });}, 1000);
  }

  buttonStop() {
    console.log("Starting to begin stoping");
    clearInterval(this.intervalID);
    this.setState({elapsed: 0});
  }

  buttonReset() {
    console.log("Reseting");
  }

  render() {
    return (
    <div class="taskTimerStyle">
      <ul>
        <p><span id="seconds">00</span>:<span id="minutes">{this.state.elapsed}</span></p>
        <button onClick={this.buttonStart}>Start</button>
        <button onClick={this.buttonStop}>Stop</button>
        <button onClick={this.buttonReset}>Reset</button>
      </ul> 
    </div>
    );
  } 
}

export default TaskTimer;