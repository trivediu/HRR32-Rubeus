import React, { Component } from 'react';
import axios from "axios";

export default class LoginForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  ComponentDidMount(){
    console.log(this.state)
  }
  
  setUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  setPassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin(event) {
    console.log('hello')
    console.log(this.state.username, this.state.password)
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
      })
  }
  render() {
    return (
      <div>
        <input
          value={this.state.username}
          type="text"
          placeholder="username"
          onChange={this.setUsername} />
        <br></br>
        <input
          value={this.state.password}
          type="text"
          placeholder="password"
          onChange={this.setPassword} />
        <br></br>
        <button onClick={this.handleLogin}>login</button>
        <div>
          <a href="auth/google">Log in with Google</a>
        </div>
      </div>
    )
  }
}
