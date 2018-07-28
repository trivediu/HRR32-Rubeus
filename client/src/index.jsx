import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './components/routes/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    return <div className="master">
      <div className="headers">
        <h1>App v1.1</h1>
      </div>
      <Routes />
    </div>;
  }
}

{/* <TownHallContainer />
  <MapContainer />
  <ZipForm />
  <LoginForm />
  <ListView data={this.state.data} /> */}





ReactDOM.render(<App />, document.getElementById('app'));