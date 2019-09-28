import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>Кабинет соискателя</h1>

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
            </div>
        );
    }
}
