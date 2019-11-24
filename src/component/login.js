import React from 'react';
import './../css/login.css';
import Register from './register.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPass: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        <section id='login'>
          <h2>Login</h2>
          <label htmlFor='userName'>Username</label>
          <input
            type='text'
            placeholder='Enter Username'
            name='userName'
            value={this.state.userName}
            onChange={this.onChange}
            required
          ></input>
          <label htmlFor='userPass'>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            name='userPass'
            value={this.state.userPass}
            onChange={this.onChange}
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
      <main id='loginContainer'>
        <Register />
        <Login />
      </main>
    );
  }
}

export default HomeFormSection;
