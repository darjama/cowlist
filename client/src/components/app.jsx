import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './cowList.jsx';
import CowDetails from  './cowDetails.jsx';
import AddCow from './addCow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gottenCows: [{id:1,name:"her",description:"low"}],
                  detailCow: null,
                newCowName: null,
              newCowDesc: null};

  }

  getCows() {
    $.get( "/api/cows", ( data ) =>
    this.setState({
      gottenCows: data
    })
  )};

  postCow(searchObj) {
    $.ajax({
      type: "POST",
      datatype: 'json',
      contentType: 'application/json',
      url: `/api/cows`,
      data: JSON.stringify(searchObj),
      success: this.getCows()
    })
  };

  getDetails(cow) {
    this.setState({
      detailCow: cow
    })
  }

  componentDidMount () {
    this.getCows();
  }
  render() {
    return (
      <div><div id="cowDescription"><h4><CowDetails  cow={this.state.detailCow}/></h4></div>
      <h3>The list of Cows</h3>
      <div id ="list"><h3><CowList cows={this.state.gottenCows} getDetails={this.getDetails.bind(this)}/></h3></div>
        <div>< AddCow submitForm={this.postCow.bind(this)}/></div>
        </div>
    )
  }

}

export default App;
