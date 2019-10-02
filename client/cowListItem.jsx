import React from 'react';
import ReactDOM from 'react-dom';

function CowListItem(props) {
  const singleCow = props.cow;
  return (
    <h4>{singleCow.name}: {singleCow.description} </h4>
  );
  }