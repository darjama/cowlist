import React from 'react';
import ReactDOM from 'react-dom';

function CowList(props) {
  const cowsList = props.cows;
  const listItems = cowsList.map((moo) => {
    <li key={moo.id.toString()}>
      {moo.name}
    </li>
    }
  );
  return (
    <ul>{listItems}</ul>
  );
};

export default CowList;