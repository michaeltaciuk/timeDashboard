import React, {Fragment} from "react";
import ElapsedTimeBar from "./ElapsedTimeBar";
import "./SuccessfullSchedules.css";
import api from "../api/api";

class SuccessfulSchedules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            benjaminFranklin: [{
                "name": "Sleep",
                "color": "#21618C",
                "started": 0,
                "seconds": 18000
              },
              {
                  "name": "Rise, Wash, Plan Day and Breakfast",
                  "color": "lightgreen",
                  "started": 18000,
                  "seconds": 10800
              },
              {
                  "name": "Work",
                  "color": "green",
                  "started": 28800,
                  "seconds": 14400
              },
              {
                  "name": "Read, Overlook Accounts and Dine",
                  "color": "purple",
                  "started": 43200,
                  "seconds": 7200
              },
              {
                  "name": "Work",
                  "color": "green",
                  "started": 50400,
                  "seconds": 14400
              },
              {
                  "name": "Supper, Music, Diversion or Conversation. Examination of the day and put things in their places",
                  "color": "#900D09",
                  "started": 64800,
                  "seconds": 14400
              },
              {
                  "name": "Sleep",
                  "color": "#21618C",
                  "started": 79200,
                  "seconds": 10800
              }],
            charlesDarwin: []
        }
    }

    async componentDidMount() {
        console.log("componentDidMount");
        const response = await api.getUserData("charles@darwin.uk");
        console.log(response.data.history[0].timeChunks);
        this.setState({charlesDarwin: response.data.history[0].timeChunks});
    }

    //function the prints the time chunks of charles darwin when it changes
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.charlesDarwin !== this.state.charlesDarwin) {
    //         console.log("componentDidUpdate");
    //         console.log(this.state.charlesDarwin);
    //     }
    // }

    // var charlesDarwin = [
    //     {
    //       "name": "Sleep",
    //       "color": "#21618C",
    //       "started": 0,
    //       "seconds": 25200
    //     },
    //     {
    //         "name": "Walk",
    //         "color": "#14AF77",
    //         "started": 25200,
    //         "seconds": 2700
    //     },
    //     {
    //         "name": "Breakfast",
    //         "color": "#AF601A",
    //         "started": 27900,
    //         "seconds": 900
    //     },
    //     {
    //         "name": "Work",
    //         "color": "green",
    //         "started": 28800,
    //         "seconds": 5400
    //     },
    //     {
    //         "name": "Read",
    //         "color": "purple",
    //         "started": 34200,
    //         "seconds": 3600
    //     },
    //     {
    //         "name": "Work",
    //         "color": "green",
    //         "started": 37800,
    //         "seconds": 5400
    //     },
    //     {
    //         "name": "Walk",
    //         "color": "#14AF77",
    //         "started": 43200,
    //         "seconds": 2700
    //     },
    //     {
    //         "name": "Lunch",
    //         "color": "#AF601A",
    //         "started": 45900,
    //         "seconds": 2700
    //     },
    //     {
    //         "name": "Read",
    //         "color": "purple",
    //         "started": 48600,
    //         "seconds": 5400
    //     },
    //     {
    //         "name": "Break",
    //         "color": "#900D09",
    //         "started": 54000,
    //         "seconds": 3600
    //     },
    //     {
    //         "name": "Walk",
    //         "color": "#14AF77",
    //         "started": 57600,
    //         "seconds": 1800
    //     },
    //     {
    //         "name": "Work",
    //         "color": "green",
    //         "started": 59400,
    //         "seconds": 3600
    //     },
    //     {
    //         "name": "Break",
    //         "color": "#900D09",
    //         "started": 63000,
    //         "seconds": 7200
    //     },
    //     {
    //         "name": "Dinner",
    //         "color": "#AF601A",
    //         "started": 70200,
    //         "seconds": 2700
    //     },
    //     {
    //         "name": "Break",
    //         "color": "#900D09",
    //         "started": 72900,
    //         "seconds": 7200
    //     },
    //     {
    //         "name": "Sleep",
    //         "color": "#21618C",
    //         "started": 80100,
    //         "seconds": 86400
    //     }
    // ]

    render() {
        return (
            <div className="container">
                <Fragment>
                    <h2 className="name">Benjamin Franklin</h2>
                    <ElapsedTimeBar timeChunks={this.state.benjaminFranklin}/>
                    <br/>
                    <h2 className="name">Charles Darwin</h2>
                    <ElapsedTimeBar timeChunks={this.state.charlesDarwin}/>
                    <br/>
                </Fragment>
            </div>
        );
    }
}

export default SuccessfulSchedules;