import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>ETK</h1>

                <p><Link to="/auth">Авторизоваться</Link></p>
            </div>
        );
    }
};
