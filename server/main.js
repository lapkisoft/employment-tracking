import {Meteor} from 'meteor/meteor';

import Cities from '../imports/api/cities.js';
import Countries from '../imports/api/countries.js';
import Education from '../imports/api/education.js';
import Faculties from '../imports/api/faculties.js';
import Specialties from '../imports/api/specialties.js';
import Universities from '../imports/api/universities.js';

Meteor.startup(() => {
    if (Countries.find().count() === 0) {
        Countries.insert({code: 'RU', name: 'Российская Федерация'});
    }

    if (Cities.find().count() === 0) {
        Cities.insert({code: 'KZN', country_code: 'RU', name: 'Казань'});
    }

    if (Universities.find().count() === 0) {
        Universities.insert({country_code: 'RU', city_code: 'KZN', name: 'Казанский федеральный университет'});
    }
});
