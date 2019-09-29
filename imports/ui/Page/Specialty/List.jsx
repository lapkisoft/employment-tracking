import {Meteor} from 'meteor/meteor';
import React from 'react';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';

export default class extends React.Component {
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
            <section className="section-specialty-list">
                <form action="">
                    <div className="search-input-header">
                        <input
                            name="search"
                            type="search"
                            onChange={this.handleChange}
                            value={this.state.search}
                            placeholder="Введите ОКСО или наименование специальности"/>
                        <div className="hints"/>
                    </div>
                </form>

                <div className="specialty-listing-wrapper">
                    <div className="specialty-listing-header">
                        <div className="count">3 специальности</div>
                        <div className="name">Специальность</div>
                        <div className="vacancies">Всего вакансий</div>
                        <div className="resume">Всего резюме</div>
                        <div className="salary">Средняя зарплата</div>
                    </div>

                    <div className="specialty-listing">
                        <article>
                            <div className="img-wrapper">
                                <img src="/img/specialty/montajnik.png" alt=""/>
                            </div>
                            <div className="code">2.08.01.02</div>
                            <Link to="/specialty/view" className="name">Монтажник трубопроводов</Link>
                            <div className="vacancies">245</div>
                            <div className="resume">648</div>
                            <div className="salary">45 343 руб</div>
                        </article>
                        <article>
                            <div className="img-wrapper">
                                <img src="/img/specialty/none.png" alt=""/>
                            </div>
                            <div className="code">3.34.01.01</div>
                            <Link to="/specialty/view" className="name">Младшая медицинская сестра по уходу за больными</Link>
                            <div className="vacancies">245</div>
                            <div className="resume">648</div>
                            <div className="salary">45 343 руб</div>
                        </article>
                        <article>
                            <div className="img-wrapper">
                                <img src="/img/specialty/none.png" alt=""/>
                            </div>
                            <div className="code">2.07.02.01</div>
                            <Link to="/specialty/view" className="name">Архитектура</Link>
                            <div className="vacancies">245</div>
                            <div className="resume">648</div>
                            <div className="salary">45 343 руб</div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
