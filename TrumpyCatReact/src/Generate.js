import React, { Component } from 'react';
import { Router, Link } from 'react-router';

class Generate extends Component {
  render() {
    return(
      <div>
        <form>
          <button><i className="fa fa-refresh" aria-hidden="true"></i> Cat</button>
        </form>

        <form>
          <button><i className="fa fa-refresh" aria-hidden="true"></i> Quote</button>
        </form>
      </div>

    );
  }
}

module.exports = Generate;
