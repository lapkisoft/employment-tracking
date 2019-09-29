import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.authPerson    = this.authPerson.bind(this);
        this.authEducation = this.authEducation.bind(this);
        this.authEmployer  = this.authEmployer.bind(this);

        this.auth_ref = React.createRef();
        this.state    = {};
    }

    authPerson(e) {
        e.preventDefault();

        this.auth_ref.current.classList.add('waiting');

        setTimeout(() => {
            this.props.history.push('/cabinet/person');
        }, 2500);
    }

    authEmployer(e) {
        e.preventDefault();

        Meteor.loginWithPassword('employer', 'employer', () => {
            this.props.history.push('/cabinet/employer');
        });
    }

    authEducation(e) {
        e.preventDefault();

        Meteor.loginWithPassword('education', 'education', () => {
            this.props.history.push('/cabinet/education');
        });
    }

    render() {
        return (
            <section className="section-auth-page">
                <div className="auth" ref={this.auth_ref}>
                    <img src="/img/logo-big.png" alt=""/>

                    <a href="#" onClick={this.authPerson}>Войти через госуслуги (ЕСИА)</a>
                </div>
            </section>
        );
    }
}
