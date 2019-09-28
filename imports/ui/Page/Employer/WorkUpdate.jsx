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

        Works.update({_id: this.props.work._id}, {
            id:                this.props.work.id,
            user_id:           this.props.work.user_id,
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
                <h1>Редактирование записи о работе</h1>

                {this.props.work && this.props.user ? <EmployerWorkForm onSubmit={this.handleSubmit} {...this.props.work}/> : ''}
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
