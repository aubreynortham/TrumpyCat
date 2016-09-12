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
    let randomized = [
      {image: "http://i.imgur.com/VJbgQn1.jpg"},
      {content: "You know, it really doesn&#39;t matter what [the media] write as long as you&#39;ve got a young and beautiful piece of ass."}
    ];

    if (this.state.hasGenerated){
      return (
        <div>
          <Results randomized={this.state.randomized} />
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
        <Generate
          handleSubmitCatQuery={(evt) => this.submitCatQuery(evt)}
          handleSubmitQuoteQuery={(evt) => this.submitQuoteQuery(evt)}
          handleSubmitRandomQuery={(evt) => this.submitRandomQuery(evt)}
        />
      );
    }
  }
}

module.exports = GenerateContainer;
