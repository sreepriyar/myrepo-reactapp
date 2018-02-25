import React, { Component } from 'react';

class Address extends Component {
  static defaultProps = {
    Address:{ 
        CurrentAddress:'CurrentAddress',
        City: 'City',
        State: 'State',
        Zip: 'Zip',
        Email:'EmailAddress',
        PrimaryPh: 'PrimaryPhone',
        SecondaryPh: 'SecondaryPh'
    }
  }
  render() {
    return (
      <div className="Address">
       <label>{this.props.Address.CurrentAddress}</label>
       <input type='text' name={this.props.Address.CurrentAddress}/>
       <br></br>
       <label>{this.props.Address.City}</label>
       <input type='text' name={this.props.Address.City}/>
       <br/>
       <label>{this.props.Address.State}</label>
       <input type='text' name={this.props.Address.State}/>
       <br/>
       <label>{this.props.Address.Zip}</label>
       <input type='text' name={this.props.Address.Zip}/>
       <br/>
       <label>{this.props.Address.Email}</label>
       <input type='text' name={this.props.Address.Email}/>
       <br/>
       <label>{this.props.Address.PrimaryPh}</label>
       <input type='text' name={this.props.Address.PrimaryPh}/>
       <br/>
       <label>{this.props.Address.SecondaryPh}</label>
       <input type='text' name={this.props.Address.SecondaryPh}/>
      </div>
    );
  }
}

export default Address;
