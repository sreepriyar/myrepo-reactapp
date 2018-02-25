import React, { Component } from 'react';

class TaxPayerDetails extends Component {
  static defaultProps = {
    TaxPayerDetails:{ 
        primary: {
            Name:'Name',
            SSN: 'Social Security Number',
            DOB: 'Date Of Birth',
            Occupation: 'Occupation'
        },
        spouse: {
            Name:'Name',
            SSN: 'Social Security Number',
            DOB: 'Date Of Birth',
            Occupation: 'Occupation'
        }
    }
  }
  render() {
    return (
      <div className="TaxPayerDetails">
      <div className='primary'>
      <h4>Primary TaxPayer Details</h4>
       <label>{this.props.TaxPayerDetails.primary.Name}</label>
       <input type='text' name={this.props.TaxPayerDetails.primary.Name}/>
       <br></br>
       <label>{this.props.TaxPayerDetails.primary.SSN}</label>
       <input type='text' name={this.props.TaxPayerDetails.primary.SSN}/>
       <br/>
       <label>{this.props.TaxPayerDetails.primary.DOB}</label>
       <input type='text' name={this.props.TaxPayerDetails.primary.DOB}/>
       <br/>
       <label>{this.props.TaxPayerDetails.primary.Occupation}</label>
       <input type='text' name={this.props.TaxPayerDetails.primary.Occupation}/>
       <br/>
       </div>
       <br/>
       <div className='spouse'>
       <h4>Spouse Details</h4>
       <label>{this.props.TaxPayerDetails.spouse.Name}</label>
       <input type='text' name={this.props.TaxPayerDetails.spouse.Name}/>
       <br/>
       <label>{this.props.TaxPayerDetails.spouse.SSN}</label>
       <input type='text' name={this.props.TaxPayerDetails.spouse.SSN}/>
       <br/>
       <label>{this.props.TaxPayerDetails.spouse.DOB}</label>
       <input type='text' name={this.props.TaxPayerDetails.spouse.DOB}/>
       <br/>
       <label>{this.props.TaxPayerDetails.spouse.Occupation}</label>
       <input type='text' name={this.props.TaxPayerDetails.spouse.Occupation}/>
       </div>
      </div>
    );
  }
}

export default TaxPayerDetails;
