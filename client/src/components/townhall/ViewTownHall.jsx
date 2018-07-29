import React, { Component } from 'react';
import TownHallQuestion from './TownHallQuestion.jsx';
import axios from 'axios';

export default class ViewTownHall extends Component {

  constructor(props) {
    super(props)

    //props should contain info on which town hall it is.
    this.state = {
      userType: 'official',
      townHallName: '',
      questions: []
    }
    console.log('Constructor called!');
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    //query list of questions for this particular town hall
    //console.log('viewtownhall mounted, current TownHall is:  ', this.props.townHall)
    this.getQuestions(this.props.townHallName);
  }


  getQuestions(hallName) {
    axios.get('/questions', {
      params: {
        townHall: hallName
      }
    })
    .then(questionsAnswers => {
      let qData = questionsAnswers.data.slice();
      qData.length > 0 ?
        this.setState({questions: qData})
        : null
    })
  }

  renderQuestions () {
    this.getQuestions(this.props.townHallName);

    if (this.state.questions.length > 0) {
      return <div>Rendered Town Hall Will Be: {this.props.townHallName}</div>
    } else {
      return <div>No questions!</div>
    }

  }

  //render
    render() {
    return (
      <div style={{ border: "dotted blue 2px" }}>
        This is the View (individual town hall) component. <br/>
        This is a child of ViewAllTownHalls<br/>
        This will map the list of questions to a list of elements.
        This will RETRIEVE a list of QUESTIONS for the SELECTED TOWN HALL, and map them to components.

        {this.renderQuestions()}
      </div>
    )
  }
}



  // //render
  //   render() {
  //   return (
  //     <div style={{ border: "dotted blue 2px" }}>
  //       This is the View (individual town hall) component. <br/>
  //       This is a child of ViewAllTownHalls<br/>
  //       This will map the list of questions to a list of elements.
  //       This will RETRIEVE a list of QUESTIONS for the SELECTED TOWN HALL, and map them to components.

  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //     </div>
  //   )
  // }

