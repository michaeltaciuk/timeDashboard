import React from "react";

class TaskTimer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {elapsed: 0};
      }
    
      render() {
        return (<div class="taskTimerStyle">
                    <a>{this.state.elapsed}</a>
                </div>);
      }
    
      componentDidMount() {
        const oneSecond = 1000;
        this.intervalID = setInterval(() => {this.setState({ elapsed: this.state.elapsed + oneSecond });}, oneSecond);
      }
    
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
    
}

export default TaskTimer;