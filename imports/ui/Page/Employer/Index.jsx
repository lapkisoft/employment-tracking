import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import Users from '../../../api/users.js';
import Works from '../../../api/works.js';
import EmployerUser from '../../Components/EmployerUser.jsx';

import {withTracker} from 'meteor/react-meteor-data';

class EmployerIndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderEmployerUsers() {
        return this.props.employerUsers.map((user) => {
            let work = this.props.employerUserWorks.find((work) => work.user_id === user.id);

            return (
                <EmployerUser key={user.id} work={work} {...user}/>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Работодатель</h1>

                <div className="user-list">
                    {this.renderEmployerUsers()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        employerUsers:     Users.find().fetch(),
        employerUserWorks: Works.find().fetch()
    };
})(EmployerIndexPage);
