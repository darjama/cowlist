import React from 'react';
import ReactDOM from 'react-dom';

function CowListItem(props) {
  const singleCow = props.cow;
  return (
    <table>{props.singleCow.name}: {props.description}</table>
  );
  }

  export default cowListItem;