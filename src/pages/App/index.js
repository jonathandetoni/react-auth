import React, { Component, Fragment } from "react";

import { logout } from "../../services/auth";

import { Button } from "rsuite";

class HomeApp extends Component {
  handleLogout = e => {
    logout();
    this.props.history.push("/");
  };

  renderActions() {
    return (
        <Button onClick={this.handleLogout}>
          <i className="fa fa-times" />
        </Button>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderActions()}
      </Fragment>
    );
  }
}

const App = () => (<HomeApp />);

export default App;
