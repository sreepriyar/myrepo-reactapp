import React, { Component } from 'react';
import './App.css';
import MaritalStatus from './Components/MaritalStatus';
import TaxPayerDetails from './Components/TaxPayerDetails';
import Address from './Components/Address';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
        <h1> CUSTOMER DATA SHEET</h1>
        <br/>
        <MaritalStatus/>
        <br/>
        <TaxPayerDetails/>
      </div>
    );
  }
}

export default App;
