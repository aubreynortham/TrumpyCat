import React, { Component } from 'react';
import { Router, Link } from 'react-router';

class Generate extends Component {
  submitCatQuery(evt){
    evt.preventDefault();
  }
  submitQuoteQuery(evt){
    evt.preventDefault();
  }
  submitRandomQuery(evt){
    evt.preventDefault();
  }
  render() {
    return(
      <div id="blackBar">
        <form id="inline">
          <button id="catBtn"><i className="fa fa-refresh" aria-hidden="true"></i> New Cat</button>
        </form>

        <form id="inline">
          <button id="randomBtn">Rand<i className="fa fa-refresh" aria-hidden="true"></i>mize</button>
        </form>

        <form id="inline">
          <button id="quoteBtn">New Quote <i className="fa fa-refresh" aria-hidden="true"></i></button>
        </form>
      </div>

    );
  }
}

module.exports = Generate;
