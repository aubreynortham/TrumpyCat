import React, { Component } from 'react';
import { Router, Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Trumpy Cat!</h1>
        <img id="homeLogo" src="http://i.imgur.com/uPudds4.png" alt="Trumpy Cat!" />
        <br />
        <Link to="/generate">
          <button type="button" id="generateBtn">Generate A Trumpy Cat!</button>
        </Link>
      </div>
    );
  }
}

export default Home;
