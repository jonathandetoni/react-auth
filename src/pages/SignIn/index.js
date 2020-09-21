import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, HelpBlock } from "rsuite";

class SignIn extends Component {
  state = {
    email: "",
    senha: "",
    error: ""
  };

  handleSignIn = async e => {
    const { email, senha } = this.state;
    if (!email || !senha) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/Login", { email, senha });
        console.log(response)
        login(response.data.acessToken);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
        <Form layout="horizontal" onSubmit={this.handleSignIn}>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl name="email" type="email" onChange={e => this.setState({ email: e })}/>
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl name="senha" type="password" onChange={e => this.setState({ senha: e })}/>
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" type="submit">Submit</Button>
              <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
    );
  }
}

export default withRouter(SignIn);
