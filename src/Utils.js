import $ from 'jquery';

//query for a new catPic and trumpQuote together
function queryBoth () {
  var catUrl = "http://trumpy-cat-api.herokuapp.com/cats";
  var quoteUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

  return $.getJSON(quoteUrl).then(function(quoteResponse){ //first API query
    return $.getJSON(catUrl).then(function(catResponseAll){ //second API query
      var catResponse = catResponseAll[Math.floor(Math.random()*catResponseAll.length)];
      // return array of both responses
      var response = [catResponse, quoteResponse];
      return response;
    });
  });
}

//query only for new catPic
function queryCat () {
  var catUrl = "http://trumpy-cat-api.herokuapp.com/cats";
  return $.getJSON(catUrl).then(function(catResponseAll){
    var catResponse = catResponseAll[Math.floor(Math.random()*catResponseAll.length)];
    return catResponse;
  });
}

//query only for new trumpQuote
function queryTrump () {
  var quoteUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
  return $.getJSON(quoteUrl).then(function(quoteResponse){
    return quoteResponse;
  });
}


//export three functions instead of the original function
export {queryBoth, queryCat, queryTrump};
