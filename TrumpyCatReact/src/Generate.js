import React, { Component } from 'react';
import { Router, Link } from 'react-router';

class Generate extends Component {
  render() {
    return(
      <div>
        <form id="inline">
          <button id="catBtn"><i className="fa fa-refresh" aria-hidden="true"></i> Cat</button>
        </form>

        <form id="inline">
          <button id="quoteBtn">Quote <i className="fa fa-refresh" aria-hidden="true"></i></button>
        </form>
      </div>

    );
  }
}

module.exports = Generate;
