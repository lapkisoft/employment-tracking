import {Meteor} from 'meteor/meteor';

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
});
