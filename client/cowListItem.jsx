import React from './react.development';
import ReactDOM from './react-dom.development';

function CowListItem(props) {
  const singleCow = props.cow;
  return (
    <table>{props.singleCow.name}: {props.description}</table>
  );
  }

  export default cowListItem;