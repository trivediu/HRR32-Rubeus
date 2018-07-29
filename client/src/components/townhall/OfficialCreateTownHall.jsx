import React, { Component } from 'react';
import axios from 'axios';

export default class OfficialCreateTownHall extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: ''
    }
  }

  //TODO:
  //Front-end :Send data to the server.
  //Server: store data into the database.

  handleClick(e) {
    e.preventDefault()
    console.log('handleClick called!')
    this.sendTownHall(this.state.title, 'timeplaceholder');
  }

  sendTownHall(title, time) {
    console.log('send town hall called')
    const data = {
      townHallName: title,
      closesAt: time,
    };
    axios.post('/create', data)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div style={{border : "dashed green 2px"}}>
        This is the Official Create Town Hall Component. <br/>
        This will create an item in the database. <br/>
        <form>
          <fieldset>
            <legend>Create a Town Hall:</legend>
              Title: 
              <input 
              name='title'
              type="text"
              value={this.state.title}
              onChange={e => this.handleChange(e)}/><br />
            Email: <input type="text" /><br />
            Open until: <input type="datetime-local" />
            <button
              onClick={this.handleClick}>
              Submit Town Hall
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}
