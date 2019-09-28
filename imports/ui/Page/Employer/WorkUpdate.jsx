import React from 'react';
import ReactDOM from 'react-dom';
import Users from '../../../api/users.js';
import Works from '../../../api/works.js';
import EmployerWorkForm from '../../Components/EmployerWorkForm.jsx';

import {withTracker} from 'meteor/react-meteor-data';

class EmployerWorkUpdatePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {};
    }

    handleSubmit(e, fields) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Редактирование записи о работе</h1>

                <EmployerWorkForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default withTracker((props) => {
    return {
        user: Users.findOne({id: props.match.params.user_id}),
        work: Works.findOne({id: props.match.params.work_id})
    };
})(EmployerWorkUpdatePage);
