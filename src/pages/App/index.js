import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { logout } from "../../services/auth";

import { Button, Icon } from "rsuite";

class HomeApp extends Component {
  handleLogout = e => {
    logout();
    this.props.history.push("/app");
  };

  render() {
    return (
        <Button onClick={this.handleLogout}>
          <Icon icon='close' />
        </Button>
    );
  }
}

export default withRouter(HomeApp);
