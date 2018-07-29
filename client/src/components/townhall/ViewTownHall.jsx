import React, { Component } from 'react';
import TownHallQuestion from './TownHallQuestion.jsx';
import axios from 'axios';

export default class ViewTownHall extends Component {

  constructor(props) {
    super(props)

    //props should contain info on which town hall it is.
  
    this.state = {
      userType: 'official',
      townHallName: '', //replace with name from props
      questions: []
    }
  }
  
  componentDidMount() {
    //query list of questions for this particular town hall
    console.log('viewtownhall mounted')
    this.getQuestions();
  }

  getQuestions() {
    console.log('getquestions called');
    axios.get('/questions')
      .then(q => {
        console.log(q)
        this.setState({questions: q.data})
      })
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
