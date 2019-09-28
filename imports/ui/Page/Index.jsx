import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.authPerson    = this.authPerson.bind(this);
        this.authEducation = this.authEducation.bind(this);
        this.authEmployer  = this.authEmployer.bind(this);

        this.state = {};
    }

    authPerson(e) {
        e.preventDefault();

        Meteor.loginWithPassword('person', 'person', () => {
            this.props.history.push('/person');
        });
    }

    authEmployer(e) {
        e.preventDefault();

        Meteor.loginWithPassword('employer', 'employer', () => {
            this.props.history.push('/employer');
        });
    }

    authEducation(e) {
        e.preventDefault();

        Meteor.loginWithPassword('education', 'education', () => {
            this.props.history.push('/education');
        });
    }

    render() {
        return (
            <div>
                <h1>Main page</h1>

                <ul>
                    <li><a href="#" onClick={this.authPerson}>Кабинет соискателя</a></li>
                    <li><a href="#" onClick={this.authEmployer}>Кабинет работодателя</a></li>
                    <li><a href="#" onClick={this.authEducation}>Кабинет ВУЗа</a></li>
                </ul>
            </div>
        );
    }
}
