class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCowName: null,
      newCowDesc: null
    }
  }

    send(){
      var reqObj = {name: this.state.newCowName, description: this.state.newCowDesc};
      console.log('reqObj: ',reqObj);
      this.props.submitForm(reqObj);
    }

    onChangeName(e){
      this.setState({
        newCowName: e.target.value
      })
    }
    onChangeDesc(e){
      this.setState({
        newCowDesc: e.target.value
      })
    }
    render(){
      return (
        <div><h3>Add a Cow</h3><br/>
            Name:
            <input type="text" id="cowFormName" onChange={this.onChangeName.bind(this)}></input><br/>
            Description:
            <input type="text" id="cowFormDesc" onChange={this.onChangeDesc.bind(this)}></input><br/>
            <button id="submit" onClick={this.send.bind(this)}>Submit New Cow</button><br/>
            </div>
      );
    }
  }

  export default AddCow;