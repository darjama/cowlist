import React from 'react';
import ReactDOM from 'react-dom';

function CowList(props) {
  const cowsList = props.cows;
  const listItems = cowList.map((cow) =>
    <li key={cow.id.toString()}>
      {cow.name}
    </li> );

  return (
    <ul>{listItems}</ul>
  );
};