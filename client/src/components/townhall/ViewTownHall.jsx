import React, { Component } from 'react';
import TownHallQuestion from './TownHallQuestion.jsx';

export default class ViewTownHall extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userType: 'official'
    }
  }
  
  componentDidMount() {
    //query list of questions for this particular town hall
  }


  //render
  render() {
    return (
      <div style={{ border: "dotted blue 2px" }}>
        This is the View (individual town hall) component. <br/>
        This is a child of ViewAllTownHalls<br/>
        This will map the list of questions to a list of elements.
        This will RETRIEVE a list of QUESTIONS for the SELECTED TOWN HALL, and map them to components.
        <TownHallQuestion /> 
        <TownHallQuestion /> 
        <TownHallQuestion /> 
        <TownHallQuestion /> 
      </div>
    )
  }
}
