
import React, { Component } from "react";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
import logo from '../stopwatch.png';

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
            <div className="headerIndex">
                <div className="headerUpperline"></div>
                <Container
                    fluid
                    className="d-flex justify-content-center align-items-center header-container"
                >
                    <Row className="w-100">
                        <Col xs={3}></Col>
                        <Col xs={6} className="d-flex justify-content-center">
                            <img src={logo} alt="logo" className="logoResize" />
                        </Col>
                        <Col
                            xs={3}
                            className="d-flex justify-content-center align-items-center"
                        >
                            {/* <Image
                            onclick={this.handleAccountClick}
                            src={profilePic}
                            className="profilePicResize"
                            roundedCircle
                            fluid
                            /> */}
                        </Col>
                    </Row>
                </Container>
                <div className="headerUnderline"></div>
                <AccountMenu show={this.state.showAccountMenu} />
            </div>
        );
    }
}

export default Header;