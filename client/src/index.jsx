import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import { officesInfo } from '../../lib/apiHelper.js';
import { officialIndices } from '../../lib/apiHelper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      state: 'tx',
      data: [ { name: 'John Cornyn',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(202) 224-2934' ],
          urls: [ 'http://www.cornyn.senate.gov/public/' ],
          photoUrl: 'http://bioguide.congress.gov/bioguide/photo/C/C001056.jpg',
          channels: [ [Object], [Object], [Object] ],
          title: 'United States Senate' },
        { name: 'Ted Cruz',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(202) 224-5922' ],
          urls: [ 'http://www.cruz.senate.gov/' ],
          photoUrl: 'http://www.cruz.senate.gov/files/images/OfficialPortrait.jpg',
          channels: [ [Object], [Object], [Object], [Object] ],
          title: 'United States Senate' },
        { name: 'Greg Abbott',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-2000' ],
          urls: [ 'http://www.governor.state.tx.us/' ],
          channels: [ [Object], [Object], [Object], [Object] ],
          title: 'Governor' },
        { name: 'Dan Patrick',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-0001' ],
          urls: [ 'http://www.ltgov.state.tx.us/' ],
          photoUrl: 'https://www.ltgov.state.tx.us/wp-content/uploads/2015/02/dan_patrick.jpg',
          emails: [ 'LTGConstituent.Affairs@ltgov.texas.gov' ],
          channels: [ [Object], [Object] ],
          title: 'Lieutenant Governor' },
        { name: 'Ken Paxton',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-2100' ],
          urls: [ 'https://www.oag.state.tx.us/' ],
          channels: [ [Object] ],
          title: 'Attorney General' },
        { name: 'Sid Miller',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-1408' ],
          urls: [ 'http://www.texasagriculture.gov/Home.aspx' ],
          channels: [ [Object], [Object] ],
          title: 'Commissioner of Agriculture' },
        { name: 'Glenn Hegar',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-4444' ],
          urls: [ 'http://www.window.state.tx.us/' ],
          channels: [ [Object], [Object] ],
          title: 'Comptroller of Public Accounts' },
        { name: 'Wayne Christian',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-7133' ],
          title: 'Commissioner, Railroad Commission' },
        { name: 'Christi Craddick',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-7140' ],
          emails: [ 'christi.craddick@rrc.state.tx.us' ],
          title: 'Commissioner, Railroad Commission' },
        { name: 'Ryan Sitton',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-7144' ],
          title: 'Commissioner, Railroad Commission' },
        { name: 'George P. Bush',
          address: [ [Object] ],
          party: 'Republican',
          phones: [ '(512) 463-5256' ],
          urls: [ 'http://www.glo.texas.gov/' ],
          title: 'Commissioner of General Land Office' } ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    event.preventDefault();
    this.setState({ zip: this.element.value });
    // axios.get('/api', {
    //   params: {
    //     zip: this.state.zip
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    //   this.setState({ data: response })
    // })

    axios.post('/saveUser', {
      zip: this.state.zip
    })
    .then(function (response) {
      console.log(response);
    })
  }

  render () {
    var division = ("ocd-division/country:us/state:" + this.state.state);
    return (
      <div style={styles.master}>
        <h1 style={styles.headers}>App v1</h1>
        <form style={styles.zip} onSubmit={this.handleSubmit}>
          <label>
            ZipCode:<br></br>
            <input type="text" ref={el => this.element = el} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.zip}</p>
      <ListView data={this.state.data} state={this.state.state}/>
      </div>
    )
  }
}

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    var listOfReps = [];
    for (var i = 0; i < this.props.data.length; i++){
      listOfReps.push(
        <div>
          <p>{this.props.data[i].title}</p>
          <p>{this.props.data[i].name}</p>
          <p>{this.props.data[i].party}</p>
          <br></br>
          <br></br>
        </div>
      )
    }
    return listOfReps;
  }
}


const styles = {

  master: {
    alignContent: 'center',
    'fontFamily': 'Verdana, Geneva, sans-serif'
  },
  headers: {
    backgroundColor: 'red',
    alignContent: 'center',
    color: 'white',
    margin: 0,
    padding: 10
  },
  zip: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 40,
    paddingTop: 100
  },

}

ReactDOM.render(<App/>, document.getElementById('app'));