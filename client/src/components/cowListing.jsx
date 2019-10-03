import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './cowList.jsx';
import CowListItem from  './cowListItem.jsx';

class CowListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gottenCows: []};
  }

  getCows() {
  $.get( "/api/cows", function( data ) {
      //$( ".result" ).html( data );
      console.log(data);
      this.setState({
        gottenCows: data
      });
    });
  }

  componentDidMount () {
    this.getCows();
  }
  render() {
    return (
      <div><div id="cowDescription"></div>
      <h3>The list of Cows</h3>
      <div id ="list"></div>
      <div><h3>Add a Cow</h3><br/>
        <form action="/api/cows" id="cowForm" method="post">
        Name:
        <input type="text" name="name" id="cowFormName"></input><br/>
        Description:
        <input type="text" name="descripion" id="cowFormDesc"></input><br/>
        <input type="submit" value="submit new cow" id="submit"></input><br/>
        </form></div></div>
    )
  }

}

export default CowListing;
