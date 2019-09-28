import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import React from 'react';
import HH from '../../../api/head-hunter.js';

import {withTracker} from 'meteor/react-meteor-data';

class EmployerIndexPage extends React.Component {
    constructor(props) {
        super(props);

        let user = Accounts.user();

        this.state = {
            vacancies: []
        };

        HH.vacancies(user && user.profile.hh_profile_id || null).then(data => {
            this.setState({
                vacancies: data
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Кабинет работодателя</h1>
                <pre style={{fontSize: '10px'}}>{JSON.stringify(this.state.vacancies, null, 4)}</pre>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(EmployerIndexPage);
