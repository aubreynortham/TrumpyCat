import React, { Component } from 'react';
import Generate from './Generate';
import Results from './Results';
import {queryBoth, queryCat, queryTrump} from './Utils';


class GenerateContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomized: [],
      //hardcoded starter data
      catResponse: {content: "http://i.imgur.com/w7BaPYY.jpg"},
      quoteResponse: {message: "My whole life is about winning. I don&#39;t lose often. I almost never lose."},
    }
  }
  //query for new cat only
  submitCatQuery(evt){
    evt.preventDefault();
    queryCat().then(data => {
      this.setState({
        catResponse: data,
      });
    });
  }
  //query for new quote only
  submitQuoteQuery(evt){
    evt.preventDefault();
    queryTrump().then(data => {
      this.setState({
        quoteResponse: data,
      })
    })
  }
  //query for new cat and new quote together
  submitRandomQuery(evt){
    evt.preventDefault();
    queryBoth().then(data => {
      this.setState({
        catResponse: data[0],
        quoteResponse: data[1],
      });
    });
  }

  //define data being pulled into components
  render(){
      return (
        <div>
          <Results catPic={this.state.catResponse} trumpQuote={this.state.quoteResponse}/>
          <Generate
            handleSubmitCatQuery={(evt) => this.submitCatQuery(evt)}
            handleSubmitQuoteQuery={(evt) => this.submitQuoteQuery(evt)}
            handleSubmitRandomQuery={(evt) => this.submitRandomQuery(evt)}
          />
        </div>
      );
  }
}

module.exports = GenerateContainer;
