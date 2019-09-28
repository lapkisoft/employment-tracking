import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PagePersonList extends React.Component {
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
            <section className="section-person-list">
                <div className="person-list-header">
                    <div className="search-input">
                        <input
                            form="search-form"
                            name="search"
                            type="search"
                            onChange={this.handleChange}
                            value={this.state.search}
                            placeholder="Введите имя или фамилию участника"/>
                        <div className="hints"/>
                    </div>
                </div>

                <div className="user-list-columns">
                    <form id="search-form" action="">
                        <div className="form-group">
                            <label htmlFor="search-form-speciality-input">Специальность</label>

                            <select id="search-form-speciality-input" name="speciality">
                                <option value="">Все специальности</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-direction-input">Направление деятельности</label>

                            <select id="search-form-direction-input" name="direction">
                                <option value="">Все направления</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-status-input">Статус</label>

                            <select id="search-form-status-input" name="status">
                                <option value="">Все статусы</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-skills-input">Навыки</label>

                            <input id="search-form-skills-input" type="text" name="skills" placeholder="Например, UX"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-city-input">Город</label>

                            <input id="search-form-city-input" type="text" name="city" placeholder="Например, Москва"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-age-from-input">Возраст</label>

                            <div className="range">
                                <input name="age_from" type="text"/>
                                <span>&ndash;</span>
                                <input name="age_to" type="text"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="checkbox">
                                <input id="search-form-participant-rsv-projects" type="checkbox"/>

                                <label htmlFor="search-form-participant-rsv-projects">Участник проектов РСВ</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="checkbox">
                                <input id="search-form-winner-rsv-projects" type="checkbox"/>

                                <label htmlFor="search-form-winner-rsv-projects">Победитель проектов РСВ</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-age-from-input">Принимал участие в период</label>

                            <div className="range">
                                <input name="participate_rsv_from" type="text"/>
                                <span>&ndash;</span>
                                <input name="participate_rsv_to" type="text"/>
                            </div>
                        </div>

                        <button type="submit">Найти</button>
                        <button type="reset"><span>Сбросить фильтр</span></button>
                    </form>

                    <div className="user-list">

                    </div>
                </div>
            </section>
        );
    }
}

export default withTracker(() => {
    return {};
})(PagePersonList);
