import {Meteor} from 'meteor/meteor';

import Cities from '../imports/api/cities.js';
import Countries from '../imports/api/countries.js';
import Education from '../imports/api/education.js';
import Faculties from '../imports/api/faculties.js';
import Specialties from '../imports/api/specialties.js';
import Universities from '../imports/api/universities.js';
import Users from '../imports/api/users.js';
import Works from '../imports/api/works.js';

Meteor.startup(() => {
    if (Countries.find().count() === 0) {
        Countries.insert({
            code: 'RU',
            name: 'Российская Федерация'
        });
    }

    if (Cities.find().count() === 0) {
        Cities.insert({
            code:         'KZN',
            country_code: 'RU',
            name:         'Казань'
        });
    }

    if (Universities.find().count() === 0) {
        Universities.insert({
            code:         'KZN_FEDERAL_UNIVERSITY',
            country_code: 'RU',
            city_code:    'KZN',
            name:         'Казанский федеральный университет'
        });
    }

    if (Users.find().count() === 0) {
        Users.insert({
            code:        'AA000001',
            first_name:  'Василий',
            last_name:   'Пупкин',
            middle_name: 'Петров'
        });

        Users.insert({
            code:        'AA000002',
            first_name:  'Петя',
            last_name:   'Жданко',
            middle_name: 'Михайлович'
        });

        Users.insert({
            code:        'AA000003',
            first_name:  'Никита',
            last_name:   'Рогачев',
            middle_name: 'Станиславович'
        });
    }
});
