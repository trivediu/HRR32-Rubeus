import React, { Component } from 'react';
import axios from 'axios';
import ListView from './ListView.jsx';

export default class ZipForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: '',
      region: 'state',
      data: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(inputZip, inputRegion) {
    console.log('current state:', inputZip, inputRegion);

    axios.post('/reps', {
      zip: inputZip,
      region: inputRegion
    })
      .then(response => {
        if (typeof (response.data) === 'String') {
          console.log(response.data);
        } else {
          console.log(response.data);
          this.setState({ data: response.data })
        }
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.handleSubmit(this.state.zip, this.state.region);
    this.setState({
      zip: ''
    })
  }

  render() {
    return (
      <div style={{ border: "2px solid blue" }}>
        <form style={{ display: "inline-block" }}>
          <label>
            Enter a Zip Code:<br></br>
            <input
              name="zip"
              type="text"
              value={this.state.zip}
              onChange={e => this.handleChange(e)}
              placeholder="ZIP code" />
          </label>
          <input
            onClick={e => this.onSubmit(e)}
            type="submit"
            value="Submit" />
        </form>
        <div
          className="tempbtn"
          style={{ display: "inline-block" }}
          onClick={() => { this.setState({ region: 'county' }) }}>
          Set State to COUNTY
        </div>
        <div
          className="tempbtn"
          style={{ display: "inline-block" }}
          onClick={() => { this.setState({ region: 'state' }) }}>
          Set State to STATE
        </div>
        <div
          className="tempbtn"
          style={{ display: "inline-block" }}
          onClick={() => { this.setState({ region: 'country' }) }}>
          Set State to COUNTRY
        </div>
        Region is: {this.state.region}
        <div>
          <ListView data={this.state.data} />
        </div>
      </div>
    )
  }
}