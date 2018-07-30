import React, { Component } from 'react';
import CreateTownHall from './CreateTownHall.jsx';
import ViewAllTownHalls from './ViewAllTownHalls.jsx';
import ViewTownHall from './ViewTownHall.jsx'

export default class TownHallContainer extends Component {
  render() {
    return (
      <div className="container">
        <CreateTownHall />
        <ViewAllTownHalls />
      </div>
    )
  }
}