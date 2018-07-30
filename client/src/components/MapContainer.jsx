import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import './Map.css';
import axios from 'axios';
import ListView from './ListView.jsx';
import colorHelper from './colorHelper.js'

{/* <div>
  This is the MapContainer Component. Enter a title here.
          <ul>
    User Stories
            <li>When I click a state, I see the representatives for that state</li>
    <li>When I hover over a state, I see the color red/blue according to their reps</li>
    <li></li>
  </ul>
</div> */}


/**
 Known bugs: Georgia doesn't work
*/

export default class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedState: '',
      data: '',
    }
  }

  //maybe put this into the constructor?
  //these are the native components for the svg map
  mapDimensions() {
    return {
      height: 593,
      width: 959,
    }
  }

  mapHandler = (event) => {
    console.log('event.target.dataset.name is', event.target.dataset.name);

    this.setState({selectedState: event.target.dataset.name})

    axios.post('/reps', {
      location: event.target.dataset.name,
      region: 'state'
    })
    .then(response => {
      if (typeof(response.data) === 'String') {
        console.log(response.data);
      } else {
        console.log(response.data);
        this.setState({ data: response.data })
      }
    })
  };

  render() {
    console.log('render called')
    return (
      <div className="container">
        <div>
          {this.state.selectedState ? <h1>Selected: {this.state.selectedState}</h1> : <h1>Select A State!</h1>}
          
        </div>
        <div className="row text-center">
          <USAMap 
            onClick={this.mapHandler}
            title={"Choose your state"} 
            width={this.mapDimensions().width * .8}
            height={this.mapDimensions().height * .8}
            customize={{[this.state.selectedState]: {fill: colorHelper(this.state.data)}}}
          />
        </div>
        <ListView data={this.state.data}/>
      </div>
    )
  }
}