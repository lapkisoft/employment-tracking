import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            organization_name: '',
            position:          '',
            begin_at:          null,
            begin_comment:     '',
            end_at:            null,
            end_comment:       ''
        };
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
            <form action="" onSubmit={e => this.props.onSubmit(e, this.state)}>
                <div className="form-group">
                    <label htmlFor="employer-work-name-input">Наимениование организации</label>
                    <input id="employer-work-name-input" name="organization_name" type="text" onChange={this.handleChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="employer-work-position-input">Должность</label>
                    <input id="employer-work-position-input" name="position" type="text" onChange={this.handleChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="employer-work-begin-at-input">Дата приема на работу</label>
                    <DatePicker
                        id="employer-work-begin-at-input"
                        name="begin_at"
                        onChange={date => this.handleDateChange('begin_at', date)}
                        selected={this.state.begin_at}
                        locale="ru"
                        required/>
                </div>

                <div className="form-group">
                    <label htmlFor="employer-work-begin-comment-input">Сведения о приеме</label>
                    <input id="employer-work-begin-comment-input" name="begin_comment" onChange={this.handleChange} type="text"/>
                </div>

                <div className="form-group">
                    <label htmlFor="employer-work-end-at-input">Дата увольнения</label>
                    <DatePicker
                        id="employer-work-end-at-input"
                        name="end_at"
                        onChange={date => this.handleDateChange('end_at', date)}
                        selected={this.state.end_at}
                        locale="ru"/>
                </div>

                <div className="form-group">
                    <label htmlFor="employer-work-end-comment-input">Сведения об увольнении</label>
                    <input id="employer-work-end-comment-input" name="end_comment" onChange={this.handleChange} type="text"/>
                </div>

                <div className="form-controls">
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        );
    }
}
