import React from 'react';
import ReactDOM from 'react-dom';
import CowList from 'cowList.js';

var getCows = function() {
  $.get( "/api/cows", function( data ) {
    $( ".result" ).html( data );
    console.log( data);
  });
};

componentDidMount: getCows();

ReactDOM.render(cowList, cows=data, document.getElementById('list'));