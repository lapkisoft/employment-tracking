import React from 'react';
import ReactDOM from 'react-dom';

import WorkForm from '../../Components/WorkForm.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, fields) {
        e.preventDefault();

        console.log(fields);
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
