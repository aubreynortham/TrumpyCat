import React, { Component } from 'react';
import { Router, Link } from 'react-router';

//defines home page layout and links
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Do you enjoy keeping up with the political scene
        <br />... but find Trump&#39;s statements<span id="redEmph"> a bit harsh?</span>
        <br />
        Try hearing it from a cat instead!</h1>
        <img id="homeLogo" src="http://i.imgur.com/uPudds4.png" alt="Trumpy Cat!" />
        <br />
        <Link to="/TrumpyCat/generate">
          <button type="button" id="generateBtn">Generate A Trumpy Cat!</button>
        </Link>
      </div>
    );
  }
}

export default Home;
