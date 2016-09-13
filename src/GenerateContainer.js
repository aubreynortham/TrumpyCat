import React, { Component } from 'react';
import Generate from './Generate';
import Results from './Results';
import {queryAPI} from './Utils';

class GenerateContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasGenerated: false,
      randomized: [],
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
    queryAPI(this.state.query).then(data => {
      this.setState({
        hasGenerated: true,
        randomized: data,
      });
    });
  }
  render(){
    let starterContent = [
      {content: "http://i.imgur.com/w7BaPYY.jpg"},
      {message: "My whole life is about winning. I don&#39;t lose often. I almost never lose."}
    ];

    if (this.state.hasGenerated){
      return (
        <div>
          <Results randomized={this.state.randomized} catPic={this.state.randomized[0]} trumpQuote={this.state.randomized[1]}/>
          <Generate
            handleSubmitCatQuery={(evt) => this.submitCatQuery(evt)}
            handleSubmitQuoteQuery={(evt) => this.submitQuoteQuery(evt)}
            handleSubmitRandomQuery={(evt) => this.submitRandomQuery(evt)}
          />
        </div>
      );
    }
    else {
      return (
        <div>
          <Results randomized={starterContent} catPic={starterContent[0]} trumpQuote={starterContent[1]}/>
          <Generate
            handleSubmitCatQuery={(evt) => this.submitCatQuery(evt)}
            handleSubmitQuoteQuery={(evt) => this.submitQuoteQuery(evt)}
            handleSubmitRandomQuery={(evt) => this.submitRandomQuery(evt)}
          />
        </div>
      );
    }
  }
}

module.exports = GenerateContainer;
