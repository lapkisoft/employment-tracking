import React from 'react';
import ReactDOM from 'react-dom';
import Works from '../../../api/works.js';

import EmployerWorkForm from '../../Components/EmployerWorkForm.jsx';
import {withTracker} from 'meteor/react-meteor-data';
import Users from '../../../api/users';

class EmployerWorkCreatePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, fields) {
        e.preventDefault();

        let id = [
            String.fromCharCode(Math.random() * 25 + 65),
            String.fromCharCode(Math.random() * 25 + 65),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10)
        ].join('');

        Works.insert({
            id:                id,
            user_id:           this.props.user.id,
            organization_name: fields.organization_name || null,
            position:          fields.position || null,
            begin_at:          fields.begin_at || null,
            begin_comment:     fields.begin_comment || null,
            end_at:            fields.end_at || null,
            end_comment:       fields.end_comment || null
        });

        this.props.history.push('/employer');
    }

    render() {
        return (
            <div>
                <h1>Добавление записи о работе</h1>

                {this.props.user ? <EmployerWorkForm onSubmit={this.handleSubmit}/> : ''}
            </div>
        );
    }
}

export default withTracker((props) => {
    return {
        user: Users.findOne({id: props.match.params.user_id})
    };
})(EmployerWorkCreatePage);

