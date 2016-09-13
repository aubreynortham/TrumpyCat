import $ from 'jquery';

export function queryAPI (query) {
  var catUrl = "http://trumpy-cat-api.herokuapp.com/cats";
  var quoteUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

  return $.getJSON(quoteUrl).then(function(quoteResponse){ //first API query
    quoteResponse = quoteResponse
    return $.getJSON(catUrl).then(function(catResponseAll){ //second API query
      var catResponse = catResponseAll[Math.floor(Math.random()*catResponseAll.length)];
      // return array of both responses
      var response = [catResponse, quoteResponse];
      console.log(response);
      return response;
    });
  });
}
