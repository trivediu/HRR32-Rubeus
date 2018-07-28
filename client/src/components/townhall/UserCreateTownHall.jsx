import React, { Component } from 'react'

const fakeData = [
  {
    townHallName: "Senator Jeff's town hall",
    closesAt: "somedate here."
  },
  {
    townHallName: "Governor Fred's town hall",
    closesAt: "somedate here."
  },
  {
    townHallName: "House James's town hall",
    closesAt: "somedate here."
  }
];

//this is a helper stateless component
const Options = props => <select>{props.open.map((hall, i) => <option key={i}>{hall.townHallName}</option>)}</select>;

//This should query the db for a list of open town halls.
//Town halls are opened by 'officials'.

//The user will be able to submit a form that sends the database both the question and the townhall identifier.
export default class UserCreateTownHall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openTownHalls : fakeData,
    }
  }

  //When component mounts, it should query the database for available town halls.
  //With this array of town halls, it should reflect them into the options list
  componentDidMount(){
    //call get request to server
    //let's use a route called /townhall

    //received town halls, setState to new data
  }

  handleSubmit(){
    //send data to server
    //tell it that you are a user and send it your question and which town hall it is for
  }


  render() {
    return (
      <div style={{border: "solid green 2px"}}>
        This is the User Create Town Hall Component.
        This will need to RETRIEVE a list of CURRENT TOWN HALLS.
        This will need to SEND a QUESTION to a CURRENT TOWN HALL.

        <form>
          <fieldset>
            <legend>Ask a Town Hall:</legend>
            Select a Town Hall: <Options open={this.state.openTownHalls} /><br/>
            Question: <textarea placeholder="Enter a Question Here."/><br/>
            <button>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}


