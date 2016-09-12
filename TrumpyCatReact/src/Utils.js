import $ from 'jquery';

export function queryAPI (query) {
  var catUrl = "http://localhost:8080/cats";
  var quoteUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

  return $.getJSON(quoteUrl).then(function(quoteResponse){
    quoteResponse = quoteResponse["message"]
    console.log(quoteResponse);
    return quoteResponse;
  });
}
