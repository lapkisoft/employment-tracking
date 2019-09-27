import {Meteor} from 'meteor/meteor';

import Cities from '../imports/api/cities.js';
import Countries from '../imports/api/countries.js';
import Education from '../imports/api/education.js';
import Faculties from '../imports/api/faculties.js';
import Specialties from '../imports/api/specialties.js';
import Universities from '../imports/api/universities.js';

Meteor.startup(() => {
    if (Countries.find().count() === 0) {
        Countries.insert({
            code: 'RU',
            name: 'Российская Федерация'
        });
        Countries.insert({
            code: 'KZ',
            name: 'Казахстан'
        });
    }

    if (Cities.find().count() === 0) {
        Cities.insert({
            code:         'KZN',
            country_code: 'RU',
            name:         'Казань'
        });
        Cities.insert({
            code:         'NUR',
            country_code: 'KZ',
            name:         'Нурсултан'
        });
    }

    if (Universities.find().count() === 0) {
        Universities.insert({
            code:         'KZN_FEDERAL_UNIVERSITY',
            country_code: 'RU',
            city_code:    'KZN',
            name:         'Казанский федеральный университет'
        });
        Universities.insert({
            code:         'NAZARBAEV_UNIVERSITY',
            country_code: 'KZ',
            city_code:    'NUR',
            name:         'Назарбаев университет'
        });
    }
});
