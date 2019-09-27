import React, { Component } from 'react';
import Countries from '../../../api/countries.js';
import { withTracker } from 'meteor/react-meteor-data';
 
class AddEducationForm extends Component {
  renderOptions() {
    let countries = this.props.countries;

    return countries.map((country) => {
      return (
        <option key={country._id} value={country._id}>{country.name}</option>
      );
    });
  }

  render() {
    return (
      <div>
          <h1>Высшее образование</h1>
          <form>
              <label htmlFor="country">Страна: </label>
              <select id="country">
                  {this.renderOptions()}
              </select>
          </form>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    countries: Countries.find().fetch(),
  };
})(AddEducationForm);
