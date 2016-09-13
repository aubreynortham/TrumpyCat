import React, { Component } from 'react';
import $ from 'jquery';

class Results extends Component{
  render(){
    let {randomized} = this.props;
    let results = randomized.map( (random, index) => {
      let content = $('<h1>').html(random.message).text();
      return (
        <div key={index}>
          <h1>{content}</h1>
          <img className= "bigKitty" src={random.content} />
        </div>
      )
    })
    return (
      <div>{results}</div>
    )
  }
}

export default Results
