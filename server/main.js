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

    if (Users.find().count() === 0) {
        Users.insert({
            id:          'AA000001',
            first_name:  'Василий',
            last_name:   'Пупкин',
            middle_name: 'Петров',
            birth_date:  new Date(1980, 6, 15)
        });

        Users.insert({
            id:          'AA000002',
            first_name:  'Петя',
            last_name:   'Жданко',
            middle_name: 'Михайлович',
            birth_date:  new Date(1985, 8, 5)
        });

        Users.insert({
            id:          'AA000003',
            first_name:  'Никита',
            last_name:   'Рогачев',
            middle_name: 'Станиславович',
            birth_date:  new Date(1990, 10, 25)
        });
    }

    if (Works.find().count() === 0) {
        Works.insert({
            id:                'WW0101010',
            user_id:           'AA000001',
            organization_name: 'Рога и Копыта',
            position:          'Водитель автобуса',
            begin_at:          new Date(2015, 6, 20),
            begin_comment:     'Хорошие отзывы с предыдущего места работы'
        });
    }
});
