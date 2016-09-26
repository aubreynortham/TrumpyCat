import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import $ from 'jquery';

class Results extends Component{
  render(){ //get results properties from the GenerateContainer's states
    let {catPic} = this.props;
    let {trumpQuote} = this.props;

    //check for html character entities in the seed data and convert to plain text
    trumpQuote = $('<h2>').html(trumpQuote.message).text();

    //fixed corner logo links back to home page
    //populate the random Trump quote within quote icons
    //generate random cat pic for the 'background' image
    return (
      <div>
        <Link to="/TrumpyCat">
          <img id="cornerLogo" src="http://i.imgur.com/uPudds4.png" alt="Trumpy Cat!" />
        </Link>
        <img className= "bigKitty" src={catPic["content"]} />
        <h2><i className="fa fa-quote-left" aria-hidden="true"></i>
            {trumpQuote}
            <i className="fa fa-quote-right" aria-hidden="true"></i></h2>
      </div>
    );
  }
}

export default Results;
