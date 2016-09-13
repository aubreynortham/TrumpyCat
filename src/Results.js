import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import $ from 'jquery';

class Results extends Component{
  render(){
    let {randomized} = this.props;
    let {catPic} = this.props;
    let {trumpQuote} = this.props;
    //console.log("Look at all da data", catPic, trumpQuote, randomized);
    console.log(this.props);
    console.log(catPic);
    console.log(trumpQuote);
    trumpQuote = $('<h2>').html(trumpQuote.message).text();
    console.log(trumpQuote);

    return (
      <div>
        <Link to="/TrumpyCat/#">
          <img id="cornerLogo" src="http://i.imgur.com/uPudds4.png" alt="Trumpy Cat!" />
        </Link>
        <h2><i className="fa fa-quote-left" aria-hidden="true"></i>
          {trumpQuote}
         <i className="fa fa-quote-right" aria-hidden="true"></i></h2>
        <img className= "bigKitty" src={catPic["content"]} />
      </div>
    );
  }
}

export default Results
