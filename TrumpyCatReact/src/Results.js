import React, { Component } from 'react';
import $ from 'jquery';

class Results extends Component{
  render(){
    let {randomized} = this.props;
    let results = randomized.map( (random, index) => {
      let content = $('<h1>').html(random.content).text();
      return (
        <div key={index}>
        {content}
        </div>
      )
    })
    return (
      <div>{results}</div>
    )
  }
}

export default Results
