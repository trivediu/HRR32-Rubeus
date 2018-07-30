import React, { Component } from 'react';
import axios from 'axios';
import ViewTownHall from './ViewTownHall.jsx';

export default class ViewAllTownHalls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      townHalls : [],
      townHall: '',
      questions: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getTownHalls();
  }

  getTownHalls() {
    //send get request to server
    axios.get('/alltownhalls').then(halls => {
      //console.log(halls.data);
      this.setState({townHalls: halls.data})
    })
  }


  handleClick(e) {
    this.setState({ townHall: e.target.textContent}, () => {
      axios.get('/questions', {
        params: {
          townHall: this.state.townHall
        }
      })
      .then(questionsAnswers => {
        let qData = questionsAnswers.data.slice();
        console.log('new question data', qData);
        this.setState({questions: qData})
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4"> Open Town Halls </h1>
        <ul className="list-group">
        { this.state.townHalls.length > 0 ? this.state.townHalls.map((hall, i) =>
          <li className="list-group-item" key={i}> <span onClick={this.handleClick}>{hall}</span></li>) : ''}
        </ul>
        <div className="container">
          <ViewTownHall townHallName={this.state.townHall} questions={this.state.questions}/>
        </div>
      </div>
    )
  }
}
//http://derpturkey.com/react-pass-value-with-onclick/

//