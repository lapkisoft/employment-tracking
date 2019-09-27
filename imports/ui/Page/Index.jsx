import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>Main page</h1>

                <ul>
                    <li>
                        <Link to="/employer">Работодатель</Link>
                    </li>
                    <li>
                        <Link to="/university">ВУЗ</Link>
                    </li>
                    <li>
                        <Link to="/government">Правительство</Link>
                    </li>
                    <li>
                        <Link to="/person">Соискатель</Link>
                    </li>
                </ul>
            </div>
        );
    }
};
