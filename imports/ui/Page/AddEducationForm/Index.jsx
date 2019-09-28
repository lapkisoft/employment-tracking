import React, { Component } from 'react';
import Countries from '../../../api/countries.js';
import Cities from '../../../api/cities.js';
import Universities from '../../../api/universities.js';
import Specialties from '../../../api/specialties.js';
import Education from '../../../api/education.js';
import { withTracker } from 'meteor/react-meteor-data';
 
class AddEducationForm extends Component {
  constructor(props) {
    super(props);
 
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selectedCountry: "",
      selectedCity: "",
      selectedUniversity: "",
      selectedSpecialty: "",
      selectedMode: "",
      selectedStatus: "",
      selectedYear: ""
    };
  }

  renderCountryOptions() {
    return this.props.countries.map((country) => {
      return (
        <option key={country._id} value={country.code}>{country.name}</option>
      );
    });
  }

  handleCountryChange(e) {
    this.setState({
      selectedCountry: e.target.value,
      selectedCity: "",
      selectedUniversity: "",
      selectedSpecialty: "",
      selectedMode: "",
      selectedStatus: "",
      selectedYear: ""
    });
  }

  renderCityOptions() {
    let filteredCities = this.props.cities.filter((city) => {
      return city.country_code === this.state.selectedCountry;
    });

    return filteredCities.map((city) => {
      return (
        <option key={city._id} value={city.code}>{city.name}</option>
      );
    });
  }

  handleCityChange(e) {
    this.setState({
      selectedCity: e.target.value,
      selectedUniversity: "",
      selectedSpecialty: "",
      selectedMode: "",
      selectedStatus: "",
      selectedYear: ""
    });
  }

  renderUniversityOptions() {
    let filteredUniversities = this.props.universities.filter((university) => {
      return university.country_code === this.state.selectedCountry && 
        university.city_code === this.state.selectedCity;
    });

    return filteredUniversities.map((university) => {
      return (
        <option key={university._id} value={university.code}>{university.name}</option>
      );
    });
  }

  handleUniversityChange(e) {
    this.setState({
      selectedUniversity: e.target.value,
      selectedSpecialty: "",
      selectedMode: "",
      selectedStatus: "",
      selectedYear: ""
    });
  }

  renderSpecialtyOptions() {
    let filteredSpecialties = this.props.specialties.filter((specialty) => {
      return specialty.university_code === this.state.selectedUniversity;
    });

    return filteredSpecialties.map((specialty) => {
      return (
        <option key={specialty._id} value={specialty.code}>{specialty.name}</option>
      );
    });
  }

  handleSpecialtyChange(e) {
    this.setState({
      selectedSpecialty: e.target.value,
      selectedMode: "",
      selectedStatus: "",
      selectedYear: ""
    });
  }

  handleModeChange(e) {
    this.setState({
      selectedMode: e.target.value
    });
  }

  handleStatusChange(e) {
    this.setState({
      selectedStatus: e.target.value
    });
  }

  renderYearOptions() {
    let yearsRange = [];
    let currentYear = new Date().getFullYear();

    for (var i = 1970; i <= currentYear; i++) {
      yearsRange.push(i);
    }

    return yearsRange.map((year) => {
      return (
        <option key={year} value={year}>{year}</option>
      );
    });
  }

  handleYearChange(e) {
    this.setState({
      selectedYear: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    Education.insert({
      country:    this.state.selectedCountry || null,
      city:       this.state.selectedCity || null,
      university: this.state.selectedUniversity || null,
      specialty:  this.state.selectedSpecialty || null,
      mode:       this.state.selectedMode || null,
      status:     this.state.selectedStatus || null,
      year:       this.state.selectedYear || null
    });
  }

  render() {
    return (
      <div>
          <h1>Высшее образование</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="country">Страна: </label>
              <select id="country" onChange={this.handleCountryChange} required>
                  <option value="">Выберите страну...</option>
                  {this.renderCountryOptions()}
              </select>
            </div>

            {this.state.selectedCountry != "" ? (
            <div>
              <label htmlFor="city">Город: </label>
              <select id="city" onChange={this.handleCityChange} required>
                <option value="">Выберите город...</option>
                  {this.renderCityOptions()}
              </select>
            </div>) : ""}

            {this.state.selectedCity != "" ? (
            <div>
              <label htmlFor="university">Университет: </label>
              <select id="university" onChange={this.handleUniversityChange} required>
                <option value="">Выберите университет...</option>
                  {this.renderUniversityOptions()}
              </select>
            </div>) : ""}

            {this.state.selectedUniversity != "" ? (
            <div>
              <label htmlFor="faculty">Специальность: </label>
              <select id="faculty" onChange={this.handleSpecialtyChange} required>
                <option value="">Выберите специальность...</option>
                  {this.renderSpecialtyOptions()}
              </select>
            </div>) : ""}

            {this.state.selectedSpecialty != "" ? (
            <div>
              <label htmlFor="mode">Форма обучения: </label>
              <select id="mode" onChange={this.handleModeChange} required>
                <option value="">Выберите форму обучения...</option>
                <option value="full-time">Очная</option>
                <option value="part-time">Заочная</option>
              </select>
            <br/>
              <label htmlFor="status">Степень: </label>
              <select id="status" onChange={this.handleStatusChange} required>
                <option value="">Выберите степень...</option>
                <option value="bachelor">Бакалавр</option>
                <option value="master">Магистр</option>
                <option value="specialist">Специалист</option>
              </select>
            <br/>
              <label htmlFor="graduation-year">Год выпуска: </label>
              <select id="graduation-year" onChange={this.handleYearChange} required>
                <option value="">Выберите год...</option>
                  {this.renderYearOptions()}
              </select>
            </div>
            ) : ""}
            <input type="submit" value="Добавить"/>
          </form>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    countries: Countries.find().fetch(),
    cities: Cities.find().fetch(),
    universities: Universities.find().fetch(),
    specialties: Specialties.find().fetch()
  };
})(AddEducationForm);
