import React, { Component } from 'react';


class MaritalStatus extends Component {
  static defaultProps = {
    categories:[ 
      'Married',
      'Divorced',
      'Legally Seperated',
      'Single',
      'Married Living Apart',
      'Widowed'
    ]
  }


  render() {
    let categoryOptions = this.props.categories.map(category =>{
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="MaritalStatus">
       <label>Marital Status </label>
      <select ref="category" value={this.props.status} onChange={this.props.updateStatus}>>
      {categoryOptions}
      </select>
      </div>
    );
  }
}

export default MaritalStatus;
