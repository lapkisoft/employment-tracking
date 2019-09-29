import {Meteor} from 'meteor/meteor';
import {Specialties} from '../imports/api/specialties.js';
import {WorkExperience} from '../imports/api/workExperience.js';
import {Cities} from '../imports/api/cities.js';
import {Events} from '../imports/api/events.js';
import {Profile} from '../imports/api/profile.js';
import {Experience} from '../imports/api/experience.js';
import {Education} from '../imports/api/education.js';
import myDataCompanies from '../imports/data/companies.json';
import myDataUsers from '../imports/data/users.json';
import myDataUniversities from '../imports/data/universities.json';
import myDataSpecialities from '../imports/data/specialities.json';

Meteor.startup(() => {
    if (Profile.find().count() === 0) {
        let arrayOfDocs = [...myDataCompanies, ...myDataUsers, ...myDataUniversities];
        const insert = (doc, collection) => {
            collection.insert(doc, function (error, response) {
                if(error)
                    return console.log('Error occurred while inserting');
        
                if (arrayOfDocs.length)
                    insert(arrayOfDocs.pop(), collection);
            });
        }
        insert(arrayOfDocs.pop(), Profile)
    }

    if (Specialties.find().count() <= 10) {
        let arrayOfDocs = myDataSpecialities;
        const insert = (doc, collection) => {
            collection.insert(doc, function (error, response) {
                if(error)
                    return console.log('Error occurred while inserting');
        
                if (arrayOfDocs.length)
                    insert(arrayOfDocs.pop(), collection);
            });
        }
        insert(arrayOfDocs.pop(), Specialties)
    }
});
