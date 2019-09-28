import {Meteor} from 'meteor/meteor';
import Specialties from '../imports/api/specialties.js';
import WorkExperience from '../imports/api/workExperience.js';
import Skills from '../imports/api/skills.js';
import Cities from '../imports/api/cities.js';
import Events from '../imports/api/events.js';

import YAPimg from '../client/img/yap.png';
import RLimg from '../client/img/rl.png';
import CPimg from '../client/img/cp.jpg';

Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'person',
            password: 'person',
            email:    'person@test.com',
            profile:  {
                role: 'person'
            }
        });

        Accounts.createUser({
            username: 'employer',
            password: 'employer',
            email:    'employer@test.com',
            profile:  {
                role:          'employer',
                hh_profile_id: 80
            }
        });

        Accounts.createUser({
            username: 'education',
            password: 'education',
            email:    'education@test.com',
            profile:  {
                role: 'education'
            }
        });

        Accounts.createUser({
            username: 'government',
            password: 'government',
            email:    'government@test.com',
            profile:  {
                role: 'government'
            }
        });
    }

    if (Specialties.find().count() === 0) {
        Specialties.insert({
            code: '38.04.08',
            name: 'Финансы и кредит'
        });

        Specialties.insert({
            code: '09.03.02',
            name: 'Информационные системы и технологии'
        });

        Specialties.insert({
            code: '38.03.02',
            name: 'Менеджмент'
        });

        Specialties.insert({
            code: '56.04.12',
            name: 'Военное и административное управление'
        });
    }

    if (WorkExperience.find().count() === 0) {
        WorkExperience.insert({
            code: '0',
            name: 'Без опыта'
        });

        WorkExperience.insert({
            code: '1-3',
            name: 'От 1 года до 3 лет'
        });

        WorkExperience.insert({
            code: '3-6',
            name: 'От 3 до 6 лет'
        });

        WorkExperience.insert({
            code: '6+',
            name: 'Более 6 лет'
        });
    }

    if (Skills.find().count() === 0) {
        Skills.insert({
            code: 'ux',
            name: 'UX'
        });

        Skills.insert({
            code: 'html',
            name: 'HTML'
        });

        Skills.insert({
            code: 'css',
            name: 'CSS'
        });

        Skills.insert({
            code: 'js',
            name: 'JavaScript'
        });
    }

    if (Cities.find().count() === 0) {
        Cities.insert({
            code: 'NSK',
            name: 'Новосибирск'
        });

        Cities.insert({
            code: 'KZN',
            name: 'Казань'
        });

        Cities.insert({
            code: 'MSC',
            name: 'Москва'
        });

        Cities.insert({
            code: 'SPB',
            name: 'Санкт-Петербург'
        });
    }

    if (Competitions.find().count() === 0) {
        Competitions.insert({
            code: 'CP',
            name: 'Цифровой прорыв',
            description: 'Самый большой хакатон в мире!',
            img: {CPimg},
            date: new Date(2019, 8, 27)
        });

        Competitions.insert({
            code: 'RL',
            name: 'Лидеры России',
            description: 'Открытый конкурс руководителей нового поколения',
            img: {RLimg},
            date: new Date(2019, 2, 17)
        });

        Competitions.insert({
            code: 'YAP',
            name: 'Студенческая олимпиада "Я - профессионал"',
            description: 'Олимпиада дает возможности для развития в лучших вузах страны и открывает перспективы трудоустройства в крупнейшие компании',
            img: {YAPimg},
            date: new Date(2019, 6, 10)
        });


    }
});
