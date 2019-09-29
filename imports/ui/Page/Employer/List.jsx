import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEmployerList extends React.Component {
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
            <section className="section-employer-list">
                <div className="search-input-header">
                    <input
                        form="search-form"
                        name="search"
                        type="search"
                        onChange={this.handleChange}
                        value={this.state.search}
                        placeholder="Введите наименование организации"/>
                    <div className="hints"/>
                </div>

                <div className="employer-list-columns">
                    <form id="search-form" className="search-form" action="">
                        <div className="form-group">
                            <label htmlFor="search-form-region-input">Область / Регион</label>

                            <input id="search-form-region-input" type="text" name="region"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-city-input">Город</label>

                            <input id="search-form-city-input" type="text" name="city"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="search-form-speciality-input">Сфера деятельности</label>

                            <input id="search-form-speciality-input" type="text" name="speciality"/>
                        </div>

                        <div className="controls">
                            <button type="submit">Найти</button>
                            <button type="reset"><span>Сбросить фильтр</span></button>
                        </div>
                    </form>

                    <div className="employer-list-wrapper">
                        <div className="employer-list-header">
                            <div className="count">6 компаний</div>
                        </div>

                        <div className="employer-list">
                            <article>
                                <div className="img-wrapper"><img src="/img/employers/rostelecom.png" alt=""/></div>
                                <div className="name">Ростелеком</div>
                                <div className="vacancies"><a href="#">76 стажировок</a></div>
                                <div className="events"><a href="#">4 события</a></div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/employers/mailru.png" alt=""/></div>
                                <div className="name">Mailru Group</div>
                                <div className="vacancies"><a href="#">32 стажировки</a></div>
                                <div className="events"><a href="#">2 события</a></div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/employers/1c.png" alt=""/></div>
                                <div className="name">Фирма “1С”</div>
                                <div className="vacancies"><a href="#">17 стажировок</a></div>
                                <div className="events"><a href="#">2 события</a></div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/employers/megafon.png" alt=""/></div>
                                <div className="name">Мегафон</div>
                                <div className="vacancies"><a href="#">44 стажировки</a></div>
                                <div className="events"><a href="#">12 событий</a></div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/employers/mts.png" alt=""/></div>
                                <div className="name">МТС</div>
                                <div className="vacancies"><a href="#">2 стажировки</a></div>
                                <div className="events"><a href="#">8 событий</a></div>
                            </article>
                            <article>
                                <div className="img-wrapper"><img src="/img/employers/none.png" alt=""/></div>
                                <div className="name">Рога и копыта</div>
                                <div className="vacancies"><a href="#">2 стажировки</a></div>
                                <div className="events"><a href="#">6 событий</a></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEmployerList);
