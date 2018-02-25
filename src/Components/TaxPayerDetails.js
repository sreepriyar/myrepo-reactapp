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
      {(() => {
        switch (this.props.status) {
          case 'Married' :
          return (
          <div className='maritalStatus'>
          <div className='primary'>
          <h4 align='left'>Primary TaxPayer Details</h4>
           <label>{this.props.TaxPayerDetails.primary.Name}</label>
           <input type='text' name={this.props.TaxPayerDetails.primary.Name} placeholder='FirstName/MiddleName/LastName'/>
           <br></br>
           <label>{this.props.TaxPayerDetails.primary.SSN}</label>
           <input type='text' name={this.props.TaxPayerDetails.primary.SSN}/>
           
           <br/>
           <label>{this.props.TaxPayerDetails.primary.DOB}</label>
           <input type='text' name={this.props.TaxPayerDetails.primary.DOB} placeholder='MM/DD/YYYY'/>
           <br/>
           <label>{this.props.TaxPayerDetails.primary.Occupation}</label>
           <input type='text' name={this.props.TaxPayerDetails.primary.Occupation}/>
           <br/>
           <br/>
           </div>
           <div className='primary'>
           <h4 align='center'> Spouse Details</h4>
           <label>{this.props.TaxPayerDetails.spouse.Name}</label>
           <input type='text' name={this.props.TaxPayerDetails.spouse.Name} placeholder='FirstName/MiddleName/LastName'/>
           <br></br>
           <label>{this.props.TaxPayerDetails.spouse.SSN}</label>
           <input type='text' name={this.props.TaxPayerDetails.spouse.SSN}/>
           <br/>
           <label>{this.props.TaxPayerDetails.spouse.DOB}</label>
           <input type='text' name={this.props.TaxPayerDetails.spouse.DOB} placeholder='MM/DD/YYYY'/>
           <br/>
           <label>{this.props.TaxPayerDetails.spouse.Occupation}</label>
           <input type='text' name={this.props.TaxPayerDetails.spouse.Occupation}/>
           <br/>
           </div>
          </div>
        );
          default: return(
          <div className='primary'>
    <h4>Primary TaxPayer Details</h4>
     <label>{this.props.TaxPayerDetails.primary.Name}</label>
     <input type='text' name={this.props.TaxPayerDetails.primary.Name} placeholder='FirstName/MiddleName/LastName'/>
     <br></br>
     <label>{this.props.TaxPayerDetails.primary.SSN}</label>
     <input type='text' name={this.props.TaxPayerDetails.primary.SSN}/>
     <br/>
     <label>{this.props.TaxPayerDetails.primary.DOB}</label>
     <input type='text' name={this.props.TaxPayerDetails.primary.DOB} placeholder='MM/DD/YYYY'/>
     <br/>
     <label>{this.props.TaxPayerDetails.primary.Occupation}</label>
     <input type='text' name={this.props.TaxPayerDetails.primary.Occupation}/>
     <br/>
    </div>);

        }

      })()}
       
      </div>
    );
  }
}

export default TaxPayerDetails;
