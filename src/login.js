import React from "react";
import "./login.css";
import Register from "./register.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPass: ""
    };
  }

  changeUsername = e => {
    this.setState({
      userName: e.target.value
    });
  };

  changePass = e => {
    this.setState({
      userPass: e.target.value
    });
  };

  render() {
    return (
      <form>
        <section id="login">
          <h2>Login</h2>
          <label for="user">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="user"
            value={this.state.userName}
            onChange={this.changeUsername}
            required
          ></input>
          <label for="pass">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="pass"
            value={this.state.userPass}
            onChange={this.changePass}
            required
          ></input>
          <button>Login</button>
        </section>
      </form>
    );
  }
}

class HomeFormSection extends React.Component {
  render() {
    return (
      <main id="loginContainer">
        <Register />
        <Login />
      </main>
    );
  }
}

export default HomeFormSection;
