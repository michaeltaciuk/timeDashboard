
import React, { Component } from "react";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";


import AccountMenu from "./AccountMenu.js";

class Header extends Component {
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
            <nav>
                <div class="nav-bg"></div>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Books</a></li>
                    <li><a href="">Links</a></li>
                    <li><a href="">Account</a></li>
                    </ul>
            </nav>
        );
    }
}

export default Header;