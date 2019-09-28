import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange     = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit     = this.handleSubmit.bind(this);

        this.state = {};
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleDateChange(name, date) {
        this.setState({
            [name]: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Настройки соискателя</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/person">Кабинет</Link>
                        </li>
                        <li>
                            <Link to="/person/settings">Настройки</Link>
                        </li>
                    </ul>
                </nav>

                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="person-settings-first-name-input">Имя</label>
                        <input id="person-settings-first-name-input" name="first_name" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="person-settings-last-name-input">Фамилия</label>
                        <input id="person-settings-last-name-input" name="last_name" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="person-settings-middle-name-input">Отчество</label>
                        <input id="person-settings-middle-name-input" name="middle_name" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="person-settings-birth-date-input">Дата рождения</label>
                        <DatePicker
                            id="person-settings-birth-date-input"
                            name="birth_date"
                            onChange={date => this.handleDateChange('birth_date', date)}
                            locale="ru"
                            required/>
                    </div>
                </form>
            </div>
        );
    }
}
