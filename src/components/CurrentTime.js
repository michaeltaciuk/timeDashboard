import React, { Component } from "react";
import "./CurrentTime.css";


class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAccountMenu: false,
        };
    }

    handleAccountClick = () => {
        this.setState({
            showAccountMenu: true,
        });
    };

    render() {
        return (
            
        );
    }
}

export default CurrentTime;