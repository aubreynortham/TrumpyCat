import React, { Component } from 'react';

class Results extends Component{
  render(){
    let {randomized} = this.props;
    console.log(this.props);
    console.log(randomized);
    let results = randomized.map( (random, index) => {
      return (
        <div key={index}>
        {random.content}
        </div>
      )
    })
    return (
      <div>{results}</div>
    )
  }
}

export default Results
