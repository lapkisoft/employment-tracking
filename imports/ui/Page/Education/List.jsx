import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEducationList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            search: ''
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <section className="section-education-list">
                <div className="search-input-header">
                    <input
                        form="search-form"
                        name="search"
                        type="search"
                        onChange={this.handleChange}
                        value={this.state.search}
                        placeholder="Введите наименование учебного заведения"/>
                    <div className="hints"/>
                </div>

                <div className="education-list-columns">
                    <form id="search-form" className="search-form" action="">
                        <div className="form-group">
                            <label htmlFor="search-form-region-input">Область / Регион</label>

                            <input id="search-form-region-input" type="text" name="region"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-city-input">Город</label>

                            <input id="search-form-city-input" type="text" name="city"/>
                        </div>

                        <div className="controls">
                            <button type="submit">Найти</button>
                            <button type="reset"><span>Сбросить фильтр</span></button>
                        </div>
                    </form>

                    <div className="education-list-wrapper">

                    </div>
                </div>
            </section>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEducationList);
