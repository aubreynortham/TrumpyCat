import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import $ from 'jquery';

class Results extends Component{
  render(){
    let {randomized} = this.props;
    let results = randomized.map( (random, index) => {
      let content = $('<h1>').html(random.message).text();
      return (
        <div key={index}>
          <Link to="/TrumpyCat/#">
            <img id="cornerLogo" src="http://i.imgur.com/uPudds4.png" alt="Trumpy Cat!" />
          </Link>
          <h2><i className="fa fa-quote-left" aria-hidden="true"></i>
            {content}
           <i className="fa fa-quote-right" aria-hidden="true"></i></h2>
          <img className= "bigKitty" src={random.content} />
        </div>
      );
    });
    return (
      <div>{results}</div>
    );
  }
}

export default Results
