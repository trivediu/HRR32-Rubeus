import React, { Component } from 'react';
import OfficialCreateTownHall from './OfficialCreateTownHall.jsx';
import UserCreateTownHall from './UserCreateTownHall.jsx';

export default class CreateTownHall extends Component {

  constructor(props){
    super(props);
    this.state = {
      userType : 'official'
    }
  }

  renderView() {
    // if (this.state.userType === 'user') {
    //   return <UserCreateTownHall />
    // } else if (this.state.userType === 'official') {
    //   return <OfficialCreateTownHall />
    // }
    return (
      <div>
        <UserCreateTownHall />
        <OfficialCreateTownHall />
      </div>
    )
  }

  render() {
    return (
      <div style={{border:"dotted purple 2px"}}>
        This is the Create Town Hall Component. This will display either a question form or a create town hall form, depending on the user status. In this example, both views are shown.
        {this.renderView()}
      </div>
    )
  }
}