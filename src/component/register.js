import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/userActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Phone: '',
      Pass: ''
    };

    this.onChange = this.onChange.bind(this);
    this.createUserName = this.createUserName.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createUserName = (e) => {
    e.preventDefault();

    const fullName = this.state.Name.split(' ');
    const fNLength = fullName[0].length;
    const firstLetter = fullName[0].substring(0, 1);
    const newUserName = firstLetter + fullName[1] + fNLength;

    const newUser = {
      userName: newUserName,
      Name: this.state.Name,
      Email: this.state.Email,
      Phone: this.state.Phone,
      Pass: this.state.Pass,
      loginStatus: 'false'
    };

    this.props.registerUser(newUser);
  };

  render() {
    return (
      <form id='registrationForm' onSubmit={this.createUserName}>
        <section id='register'>
          <h2>Register</h2>
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            placeholder='Enter First and Last Name'
            name='Name'
            value={this.state.Name}
            onChange={this.onChange}
            required
          ></input>
          <label htmlFor='Email'>Email</label>
          <input
            type='email'
            placeholder='Enter Email'
            name='Email'
            value={this.state.Email}
            onChange={this.onChange}
            required
          ></input>
          <label htmlFor='Phone'>Phone Number</label>
          <input
            type='tel'
            placeholder='Enter Phone Number'
            name='Phone'
            value={this.state.Phone}
            onChange={this.onChange}
            required
          ></input>
          <label htmlFor='Pass'>Password</label>
          <input
            type='password'
            placeholder='Choose Password'
            name='Pass'
            value={this.state.Pass}
            onChange={this.onChange}
            required
          ></input>
          <button>Register</button>
        </section>
      </form>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

export default connect(null, { registerUser })(Register);
