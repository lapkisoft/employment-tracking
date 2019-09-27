import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            login:    '',
            password: '112233'
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        switch (this.state.login) {
            case 'employer':
                this.props.history.push('/employer');
                break;

            case 'university':
                this.props.history.push('/university');
                break;

            case 'government':
                this.props.history.push('/government');
                break;

            case 'person':
                this.props.history.push('/person');
                break;
        }
    }

    render() {
        return (
            <div className="auth-page">
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="auth-form-login-input">Логин</label>
                        <select id="auth-form-login-input" name="login" onChange={this.handleChange} value={this.state.login}>
                            <option value="">Выберите роль пользователя</option>
                            <option value="employer">Работодатель "Рога и Копыта"</option>
                            <option value="university">ВУЗ</option>
                            <option value="government">Министерство образования</option>
                            <option value="person">Выпускник/соискатель</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="auth-form-password-input">Пароль</label>
                        <input
                            id="auth-form-password-input"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required/>
                    </div>

                    <div className="form-controls">
                        <button type="submit">Авторизация</button>
                    </div>
                </form>
            </div>
        );
    }
}
