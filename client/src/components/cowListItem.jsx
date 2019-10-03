import React from 'react';
import ReactDOM from 'react-dom';

function CowListItem(props) {
  const singleCow = props.cow;
  return (
    <div>{singleCow.name}: {singleCow.description}</div>
  );
  }

  export default CowListItem;