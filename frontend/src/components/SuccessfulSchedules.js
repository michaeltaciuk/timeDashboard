import React, {Fragment} from "react";
import ElapsedTimeBar from "./ElapsedTimeBar";

const SuccessfulSchedules = (props) => {

    var benjaminFranklin = [
        {
          "name": "Sleep",
          "color": "Blue",
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
            "color": "Orange",
            "started": 28800,
            "seconds": 14400
        },
        {
            "name": "Read, Overlook Accounts and Dine",
            "color": "Green",
            "started": 43200,
            "seconds": 7200
        },
        {
            "name": "Work",
            "color": "Orange",
            "started": 50400,
            "seconds": 14400
        },
        {
            "name": "Supper, Music, Diversion or Conversation. Examination of the day and put things in their places",
            "color": "Gray",
            "started": 64800,
            "seconds": 14400
        },
        {
            "name": "Sleep",
            "color": "Blue",
            "started": 79200,
            "seconds": 10800
        }
    ]

    var charlesDarwin = [
        {
          "name": "Sleep",
          "color": "Blue",
          "started": 0,
          "seconds": 25200
        },
        {
            "name": "Walk",
            "color": "LightBlue",
            "started": 25200,
            "seconds": 2700
        },
        {
            "name": "Breakfast",
            "color": "Green",
            "started": 27900,
            "seconds": 900
        },
        {
            "name": "Work",
            "color": "Orange",
            "started": 28800,
            "seconds": 5400
        },
        {
            "name": "Read",
            "color": "Yellow",
            "started": 34200,
            "seconds": 3600
        },
        {
            "name": "Work",
            "color": "Orange",
            "started": 37800,
            "seconds": 5400
        },
        {
            "name": "Walk",
            "color": "LightBlue",
            "started": 43200,
            "seconds": 2700
        },
        {
            "name": "Lunch",
            "color": "Green",
            "started": 45900,
            "seconds": 2700
        },
        {
            "name": "Read",
            "color": "Yellow",
            "started": 48600,
            "seconds": 5400
        },
        {
            "name": "Break",
            "color": "Gray",
            "started": 54000,
            "seconds": 3600
        },
        {
            "name": "Walk",
            "color": "LightBlue",
            "started": 57600,
            "seconds": 1800
        },
        {
            "name": "Work",
            "color": "Orange",
            "started": 59400,
            "seconds": 3600
        },
        {
            "name": "Break",
            "color": "Gray",
            "started": 63000,
            "seconds": 7200
        },
        {
            "name": "Dinner",
            "color": "Green",
            "started": 70200,
            "seconds": 2700
        },
        {
            "name": "Break",
            "color": "Gray",
            "started": 72900,
            "seconds": 7200
        },
        {
            "name": "Sleep",
            "color": "Blue",
            "started": 80100,
            "seconds": 86400
        }
    ]

    return (
        <Fragment>
            <h2>Benjamin Franklin</h2>
            <ElapsedTimeBar timeChunks={benjaminFranklin}/>
            <br/>
            <h2>Charles Darwin</h2>
            <ElapsedTimeBar timeChunks={charlesDarwin}/>
            <br/>
        </Fragment>
    );
}

export default SuccessfulSchedules;