import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';

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
                        <div className="education-list-header">
                            <div className="count">3 учебных заведения</div>
                            <div className="traffic">устроенных выпускников</div>
                            <div className="salary">средняя з/п выпускников</div>
                            <div className="rate">рейтинг</div>
                        </div>

                        <div className="education-list">
                            <article>
                                <div className="img-wrapper">
                                    <img src="/img/education/mgu.png" alt=""/>
                                </div>

                                <Link to="/education/view" className="name">«Московский государственный университет имени М.В.Ломоносова»</Link>
                                <div className="traffic">17 342 чел</div>
                                <div className="salary">94 343 руб</div>
                                <div className="rate up">182</div>
                            </article>
                            <article>
                                <div className="img-wrapper">
                                    <img src="/img/education/sgups.png" alt=""/>
                                </div>

                                <Link to="/education/view" className="name">Сибирский Государственный Университет Путей Сообщения</Link>
                                <div className="traffic">12 442 чел</div>
                                <div className="salary">54 343 руб</div>
                                <div className="rate down">122</div>
                            </article>
                            <article>
                                <div className="img-wrapper">
                                    <img src="/img/education/kfu.png" alt=""/>
                                </div>

                                <Link to="/education/view" className="name">Казанский (Приволжский) Федеральный Университет</Link>
                                <div className="traffic">16 842 чел</div>
                                <div className="salary">89 343 руб</div>
                                <div className="rate up">177</div>
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
})(PageEducationList);
