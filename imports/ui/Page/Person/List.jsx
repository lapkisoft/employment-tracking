import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import {Profile} from '../../../api/profile.js';

import 'react-datepicker/dist/react-datepicker.css';

import {withTracker} from 'meteor/react-meteor-data';

class PagePersonList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            search:               '',
            participate_rsv_from: null,
            participate_rsv_to:   null
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeDate(name, value) {
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    renderUserArticles() {
        return this.props.users.map(user => {
            console.log(user);

            return <article key={user._id} style={{display: 'none'}}>
                <div className="img-wrapper"><img src="/img/person/avatar-small-empty.png" alt=""/></div>
                <Link to={`/person/view/${user.id}`} className="name">{user.profile.name}</Link>
                <div className="work">Не работает</div>
                <div className="specialty"></div>
                <div className="achievements">
                </div>
            </article>;
        });
    }

    render() {
        return (
            <section className="section-person-list">
                <div className="search-input-header">
                    <input
                        form="search-form"
                        name="search"
                        type="search"
                        onChange={this.handleChange}
                        value={this.state.search}
                        placeholder="Введите имя или фамилию участника"/>
                    <div className="hints"/>
                </div>

                <div className="user-list-columns">
                    <form id="search-form" className="search-form" action="">
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
                                <DatePicker
                                    selected={this.state.participate_rsv_from}
                                    onChange={value => this.handleChangeDate('participate_rsv_from', value)}/>
                                <span>&ndash;</span>
                                <DatePicker
                                    selected={this.state.participate_rsv_to}
                                    onChange={value => this.handleChangeDate('participate_rsv_to', value)}/>
                            </div>
                        </div>

                        <div className="controls">
                            <button type="submit">Найти</button>
                            <button type="reset"><span>Сбросить фильтр</span></button>
                        </div>
                    </form>

                    <div className="user-list-wrapper">
                        <div className="user-list-header">
                            <div className="count">172 участника</div>
                            <div className="work">место работы</div>
                            <div className="speciality">специальность</div>
                            <div className="achievements">достижения</div>
                        </div>

                        <div className="user-list">
                            <article>
                                <div className="img-wrapper"><img src="/img/person/avatar-small-01.png" alt=""/></div>
                                <Link to="/person/view" className="name">Петров Петр</Link>
                                <div className="work">ООО “Стольмаш”</div>
                                <div className="specialty">Столяр 2 разряд</div>
                                <div className="achievements">
                                    <img src="/img/icons/world-skills.png" alt=""/>
                                </div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/person/avatar-small-02.png" alt=""/></div>
                                <Link to="/person/view" className="name">Севастьянова Анжелика</Link>
                                <div className="work">ООО “Банкфинанскредит”</div>
                                <div className="specialty">Старший консультант по инвестиционным продуктам</div>
                                <div className="achievements">
                                    <img src="/img/icons/lideri-rossii.png" alt=""/>
                                    <img src="/img/icons/world-skills.png" alt=""/>
                                </div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/person/avatar-small-03.png" alt=""/></div>
                                <Link to="/person/view" className="name">Магомед Нуриев</Link>
                                <div className="work">ООО “Юрконсалт”</div>
                                <div className="specialty">Юрист</div>
                                <div className="achievements">
                                    <img src="/img/icons/lideri-rossii.png" alt=""/>
                                    <img src="/img/icons/cifrovoy-proriv.png" alt=""/>
                                    <img src="/img/icons/world-skills.png" alt=""/>
                                </div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/person/avatar-small-empty.png" alt=""/></div>
                                <Link to="/person/view" className="name">Никита Тигров</Link>
                                <div className="work">Не работает</div>
                                <div className="specialty"></div>
                                <div className="achievements">
                                </div>
                            </article>
                            {this.renderUserArticles()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTracker(() => {
    return {
        users: Profile.find({'profile.role': 'Person'}, {limit: 20}).fetch()
    };
})(PagePersonList);
