import React from './react.development';
import ReactDOM from './react-dom.development';
import index from './index';

function CowList(props) {
  const cowsList = props.cows;
  const listItems = cowList.map((cow) => {
    <li key={cow.id.toString()}>
      {cow.name}
    </li>
    }
  );
  return (
    <ul>{listItems}</ul>
  );
};

export default CowList;