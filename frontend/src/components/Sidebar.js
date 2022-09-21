import React, {Component} from "react";
import "./Sidebar.css";
import SessionButton from "./SessionButton.js";

class Sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sessions: [
                {
                    "name": "reading",
                    "durration": 45*60
                },
                {
                    "name": "cooking",
                    "durration": 90*60
                }
            ]
        }
    }
    

    render() {
        
        return (
            <div className="sidebar-container">
                <div className="header">
                    <h1 className="sidebar-text">Sessions</h1>
                </div>
                <div className="list-container">
                    {this.state.sessions.map((session, index) => {
                        return (
                            <SessionButton
                                name={session.name}
                                //index={index}
                                //durration={user.durration}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Sidebar;