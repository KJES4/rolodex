import React from "react";
import Accounts from "./users.js";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      userName: "",
      Email: "",
      Phone: "",
      Pass: ""
    };
  }

  changeName = e => {
    this.setState({
      Name: e.target.value
    });
  };

  changeEmail = e => {
    this.setState({
      Email: e.target.value
    });
  };

  changePhone = e => {
    this.setState({
      Phone: e.target.value
    });
  };

  changePass = e => {
    this.setState({
      Pass: e.target.value
    });
  };

  createUserName = () => {
    const fullName = this.state.Name.split(" ");
    const fNLength = fullName[0].length;
    const firstLetter = fullName[0].substring(0, 1);
    const newUserName = firstLetter + fullName[1] + fNLength;
    this.setState({
      userName: newUserName
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form id="registrationForm" action={Accounts} method="post">
        <section id="register">
          <h2>Register</h2>
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter First and Last Name"
            name="name"
            value={this.state.Name}
            onChange={this.changeName}
            required
          ></input>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={this.state.Email}
            onChange={this.changeEmail}
            required
          ></input>
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            name="phone"
            value={this.state.Phone}
            onChange={this.changePhone}
            required
          ></input>
          <label for="pW">Password</label>
          <input
            type="password"
            placeholder="Choose Password"
            name="pW"
            value={this.state.Pass}
            onChange={this.changePass}
            required
          ></input>
          <button onSubmit={(this.createUserName, this.handleSubmit)}>
            Register
          </button>
        </section>
      </form>
    );
  }
}

export default Register;
