import React from "react";
import { withRouter } from "react-router-dom";
import api from "./helpers/api";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { username, password } = this.state;

      const result = await api.post("/auth/login", {
        username,
        password
      });

      localStorage.setItem("token", result.data.token);
      this.props.history.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <h3>Login</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <button type="submit">Log In</button>
        </form>
      </>
    );
  }
}

export default withRouter(Login);
