import React, { Component } from 'react';

class Generate extends Component {

  render() { //associates form submissions with functions that are defined in component's properties, from GenerateContainer.js
    let {handleSubmitCatQuery, handleSubmitQuoteQuery, handleSubmitRandomQuery} = this.props;

    //button for new cat only
    //button for new cat and new quote together
    //button for new quote only
    return(
      <div id="blackBar">
        <form onSubmit={(evt) => handleSubmitCatQuery(evt)} id="inline">
          <button id="catBtn"><i className="fa fa-refresh" aria-hidden="true"></i> New Cat</button>
        </form>
        <form onSubmit={(evt) => handleSubmitRandomQuery(evt)}id="inline">
          <button id="randomBtn">Rand<i className="fa fa-refresh" aria-hidden="true"></i>mize</button>
        </form>
        <form onSubmit={(evt) => handleSubmitQuoteQuery(evt)}id="inline">
          <button id="quoteBtn">New Quote <i className="fa fa-refresh" aria-hidden="true"></i></button>
        </form>
      </div>
    );
  }
}

module.exports = Generate;
