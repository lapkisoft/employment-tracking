import React from 'react';
import ReactDOM from 'react-dom';
import Works from '../../../api/works.js';

import WorkForm from '../../Components/WorkForm.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, fields) {
        e.preventDefault();

        Works.insert({
            organization_name: fields.organization_name || null,
            position:          fields.position || null,
            begin_at:          fields.begin_at || null,
            begin_comment:     fields.begin_comment || null,
            end_at:            fields.end_at || null,
            end_comment:       fields.end_comment || null
        });
    }

    render() {
        return (
            <div>
                <h1>Добавление записи о работе</h1>

                <WorkForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
