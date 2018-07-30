import React, { Component } from 'react'

export default class TownHallQuestion extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       question: "placeholder question??",
       votes: 42,
       answered: false,
       hearts: 12
    }
  }
  //TODO STYLE THIS
  render() {
    return (
      <div className="container">
        <div>
          Question: {this.state.question}
        </div>
        <div>
          Votes: {this.state.votes}
        </div>
        <div>
          Is this answered?{this.state.answered}
        </div>
        <div> 
          How many liked this answer?{this.state.hearts}
        </div>
      </div>
    )
  }
}
