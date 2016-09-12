import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import Results from './Results';

class Generate extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasGenerated: false,
    }
  }

  submitCatQuery(evt){
    evt.preventDefault();
  }
  submitQuoteQuery(evt){
    evt.preventDefault();
  }
  submitRandomQuery(evt){
    evt.preventDefault();
    this.setState({
      hasGenerated: true,
    });
  }
  render() {
    let randomized = [
      {content: "cat"},
      {content: "You know, it really doesn&#39;t matter what [the media] write as long as you&#39;ve got a young and beautiful piece of ass."}
    ]
    if (this.state.hasGenerated){
      return (
        <Results randomized={randomized} />
      )
    }
    return(
      <div id="blackBar">

        <form onSubmit={(evt) => this.submitCatQuery(evt)} id="inline">
          <button id="catBtn"><i className="fa fa-refresh" aria-hidden="true"></i> New Cat</button>
        </form>

        <form onSubmit={(evt) => this.submitRandomQuery(evt)}id="inline">
          <button id="randomBtn">Rand<i className="fa fa-refresh" aria-hidden="true"></i>mize</button>
        </form>

        <form onSubmit={(evt) => this.submitQuoteQuery(evt)}id="inline">
          <button id="quoteBtn">New Quote <i className="fa fa-refresh" aria-hidden="true"></i></button>
        </form>

      </div>

    );
  }
}

module.exports = Generate;
