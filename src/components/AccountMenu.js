import React, { Component, Fragment } from "react";
import Fade from "@mui/material/Fade";

class AccountMenu extends Component {
  render() {
    return (
      <Fade in={this.props.show}>
        <Fragment>
            <div>Log In</div>
            <div>History</div>
            <div>Settings</div></Fragment>
      </Fade>
    );
  }
}

export default AccountMenu;