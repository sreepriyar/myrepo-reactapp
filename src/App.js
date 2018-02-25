import React, { Component } from 'react';
import './App.css';
import MaritalStatus from './Components/MaritalStatus';
import TaxPayerDetails from './Components/TaxPayerDetails';
//import Address from './Components/Address';

class App extends Component {
  constructor(){
    super();
    this.state={
      status:'Married'
    }
  }
  updateStatus(e){
  this.setState({
      status:e.target.value
      });
  }

  contactUs() {
    // TODO: Send the email here
    console.log('sendEmail');
  }
  render() {
    return (
      <div className="App">
        <h1> CUSTOMER DATA SHEET</h1>
        <br/>
        <MaritalStatus status = {this.state.status} updateStatus={this.updateStatus.bind(this)}/>
        <br/>
        <TaxPayerDetails status = {this.state.status}/>
        <input type="button" onClick={this.contactUs.bind(this)} value='Send Email'></input>
      </div>
    );
  }
}

export default App;
