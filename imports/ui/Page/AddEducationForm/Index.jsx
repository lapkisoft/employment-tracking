import React, { Component } from 'react';
import Countries from '../../../api/countries.js';
import Cities from '../../../api/cities.js';
import { withTracker } from 'meteor/react-meteor-data';
 
class AddEducationForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      selectedCountry: "",
      selectedCity: ""
    };
  }

  renderCountryOptions() {
    return this.props.countries.map((country) => {
      return (
        <option key={country._id} value={country._id}>{country.name}</option>
      );
    });
  }

  handleCountryChange(e) {
    this.setState({
      selectedCountry: e.target.value
    });

    this.props.cities = Cities.find({country: selectedCountry}).fetch();
  }

  renderCityOptions() {
    return this.props.cities.map((country) => {
      return (
        <option key={country._id} value={country._id}>{country.name}</option>
      );
    });
  }

  handleCountryChange(e) {
    this.setState({
      selectedCity: e.target.value
    });
  }

  render() {
    return (
      <div>
          <h1>Высшее образование</h1>
          <form>
              <label htmlFor="country">Страна: </label>
              <select id="country" onChange={this.handleCountryChange}>
                  <option value="">Выберите страну...</option>
                  {this.renderCountryOptions()}
              </select>
              <br/>
              <label htmlFor="city" onChange={this.handleCityChange}>Город: </label>
              <select id="city">
                <option value="">Выберите город...</option>
                  {this.renderCityOptions()}
              </select>
          </form>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    countries: Countries.find().fetch(),
    cities: Cities.find().fetch()
  };
})(AddEducationForm);
