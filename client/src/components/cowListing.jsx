import CowList from './cowList.jsx';
import DisplayCow from  './displayCow.jsx';

class CowListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gottenCows: [{id:1,name:"her",description:"low"}]};
  }

  getCows() {
  $.get( "/api/cows", ( data ) =>
  this.setState({
    gottenCows: data
  })
  // ,
  //     console.log(data),

    )};


  componentDidMount () {
    this.getCows();
  }
  render() {
    console.log(this.state.gottenCows);
    //var gotCows = this.state.gottenCows ? this.state.gottenCows : [{id:1,name:"her",description:"low"}];
    return (
      <div><div id="cowDescription"><h4><DisplayCow  cow={this.state.gottenCows[0]}/></h4></div>
      <h2>The list of Cows</h2>
      <div id ="list"><h3><CowList cows={this.state.gottenCows}/></h3></div>
      <div><h2>Add a Cow</h2><br/>
        <form action="/api/cows" id="cowForm" method="post">
        Name:
        <input type="text" name="name" id="cowFormName"></input><br/>
        Description:
        <input type="text" name="descripion" id="cowFormDesc"></input><br/>
        <input type="submit" value="submit new cow" id="submit"></input><br/>
        </form></div>
        </div>
    )
  }

}

export default CowListing.jsx;
