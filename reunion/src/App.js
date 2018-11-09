import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Uploads from './components/Uploads'
// import Main from './components/Main'
// import List from './components/ContactList'
import './App.css'

class App extends Component {

  

  render() {
    return(
      <div className="App">
        <Route path="/" component={Home} />
        {/* <Route path="/main" component={Main} /> */}
        {/* <Route path="/info" component={List} /> */}
        <Route path="/uploads" component={Uploads} />

        {/* <Link to="/main">
          <button>HTML5up demo stuff</button>
        </Link> */}
        
        {/* <Link to="/info">
          <button>List</button>
        </Link> */}

        <div style={{ height: '30px' }} />

        <Link to="/uploads">
          <button>Uploads</button>
        </Link>

      </div>
    );
  }
}

export default App;
