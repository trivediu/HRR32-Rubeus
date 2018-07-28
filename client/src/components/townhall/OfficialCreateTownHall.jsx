import React, { Component } from 'react'

export default class OfficialCreateTownHall extends Component {

  constructor(props) {
    super(props);
  }

  //this should send the town hall,
  handleSubmit(){

  }

  render() {
    return (
      <div>
        This is the Official Create Town Hall Component.
        <form>
          <fieldset>
            <legend>Create a Town Hall:</legend>
            Title: <input type="text" /><br />
            Email: <input type="text" /><br />
            Open until: <input type="datetime-local" />
          </fieldset>
        </form>
      </div>
    )
  }
}
