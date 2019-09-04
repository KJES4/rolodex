import React from "react";
import Logo from "./mainLogo.svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true
    };
  }

  render() {
    let nav = null;
    if (this.state.login) {
      nav = (
        <ul>
          <li>Log out</li>
          <li>Contacts</li>
        </ul>
      );
    }
    return (
      <header className="header">
        <img src={Logo} alt="app logo"></img>
        <h1>Rolodex</h1>
        <nav>{nav}</nav>
      </header>
    );
  }
}

export default Header;
