import React, {Component, Fragment} from "react";
import "./Sidebar.css";

class Sidebar extends Component {
    

    render() {

        return (
            <div className="sidebar-container">
                <div className="header">
                    <h1 className="sidebar-text">To Do</h1>
                </div>
                <div className="list-container"></div>
                <button className="addToDo">Add Task</button>
            </div>
        );
    }
}

export default Sidebar;