import React from 'react';
import ReactDOM from 'react-dom';

import {DateTime} from 'luxon';

import Contacts from '../../api/contacts.js';
import {withTracker} from 'meteor/react-meteor-data';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange  = this.handleChange.bind(this);
        this.onSubmit      = this.onSubmit.bind(this);
        this.deleteContact = this.deleteContact.bind(this);

        this.state = {
            name:        '',
            description: ''
        };
    }

    handleChange(e) {
        let value = e.target.value;

        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }

        this.setState({
            [e.target.name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        Contacts.insert({
            name:        this.state.name,
            description: this.state.description,
            createdAt:   new Date()
        });

        ReactDOM.findDOMNode(this.refs.form).reset();
    }

    deleteContact(contact) {
        Contacts.remove({_id: contact._id});
    }

    renderContacts() {
        return this.props.contacts.map((contact) => (
            <li key={contact._id}>
                <h2>{contact.name}</h2>
                <h4>{DateTime.fromJSDate(contact.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}</h4>
                <div>{contact.description}</div>
                <button type="button" onClick={() => this.deleteContact(contact)}>Delete</button>
            </li>
        ));
    }

    render() {
        return (
            <div>
                <h1>Contacts page</h1>

                <form ref="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}/>
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleChange}/>

                    <button type="submit">Сохранить</button>
                </form>

                <ul>
                    {this.renderContacts()}
                </ul>
            </div>
        );
    }
}


export default withTracker(() => {
    return {
        contacts: Contacts.find({}, {sort: {createdAt: -1}}).fetch()
    };
})(Contacts);
