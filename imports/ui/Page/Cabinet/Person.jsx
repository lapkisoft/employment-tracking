import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class PagePerson extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTimeLineForm            = this.toggleTimeLineForm.bind(this);
        this.toggleEducationForm           = this.toggleEducationForm.bind(this);
        this.toggleEducationAdditionalForm = this.toggleEducationAdditionalForm.bind(this);
        this.toggleSkillsForm              = this.toggleSkillsForm.bind(this);

        this.timeline_ref             = React.createRef();
        this.education_ref            = React.createRef();
        this.education_additional_ref = React.createRef();
        this.skills_ref               = React.createRef();
    }

    toggleTimeLineForm(e) {
        e.preventDefault();
    }

    toggleEducationForm(e) {
        e.preventDefault();
    }

    toggleEducationAdditionalForm(e) {
        e.preventDefault();
    }

    toggleSkillsForm(e) {
        e.preventDefault();
    }

    render() {
        return (
            <section className="section-person-view section-cabinet-person">
                <div className="person-header">
                    <div className="img-wrapper">
                        <img src="/img/person/avatar-01.png" alt=""/>
                    </div>

                    <div className="content">
                        <h1>Иванов Иван Иванович</h1>
                        <h3>Россия, г. Новосибирск</h3>
                        <h4 className="danger">в поисках трудоустройства</h4>

                        <div className="markers">
                            <img src="/img/icons/lideri-rossii.png" alt=""/>
                            <img src="/img/icons/cifrovoy-proriv.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="person-header-controls">
                    <div className="rating up">
                        <small>Рейтинг</small>
                        <span>68</span>
                    </div>
                </div>

                <div className="person-dashboard">
                    <div className="plank timeline" ref={this.timeline_ref}>
                        <h2>Опыт работы и достижения</h2>

                        <a href="#" className="create" onClick={this.toggleTimeLineForm}>
                            <img src="/img/icons/plus-blue.png" alt=""/>
                        </a>

                        <ul>
                            <li>
                                <div className="date">апрель, 2014</div>
                                <div className="icon">
                                    <div className="img">
                                        <img src="/img/icons/lideri-rossii.png" alt=""/>
                                    </div>
                                </div>
                                <div className="content">
                                    <a href="#" className="download">Победитель проекта “ЛИДЕРЫ РОССИИ”</a>
                                </div>
                            </li>
                            <li className="dismissal">
                                <div className="date">март, 2014</div>
                                <div className="icon">
                                    <div className="img">
                                        <img src="/img/employers/rostelecom.png" alt=""/>
                                    </div>
                                </div>
                                <div className="content">
                                    <a href="#">Закончил работать в ПАО “РОСТЕЛЕКОМ”</a>
                                </div>
                            </li>
                            <li>
                                <div className="date">февраль, 2014</div>
                                <div className="icon">
                                    <div className="img">
                                        <img src="/img/employers/rostelecom.png" alt=""/>
                                    </div>
                                </div>
                                <div className="content">
                                    <a href="#">Повышение до Middle Frontend Developer в ПАО “РОСТЕЛЕКОМ”</a>
                                </div>
                            </li>
                            <li>
                                <div className="date">январь, 2014</div>
                                <div className="icon">
                                    <div className="img">
                                        <img src="/img/icons/cifrovoy-proriv.png" alt=""/>
                                    </div>
                                </div>
                                <div className="content">
                                    <a href="#">Участник федерального проекта “Цифровой прорыв”</a>
                                </div>
                            </li>
                            <li>
                                <div className="date">декабрь, 2013</div>
                                <div className="icon">
                                    <div className="img">
                                        <img src="/img/employers/rostelecom.png" alt=""/>
                                    </div>
                                </div>
                                <div className="content">
                                    <a href="#">Начал работать в ПАО “РОСТЕЛЕКОМ” в городе Новосибирск по специальности Junior Frontend Developer</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="plank education" ref={this.education_ref}>
                        <h2>Образование</h2>

                        <a href="#" className="create" onClick={this.toggleEducationForm}>
                            <img src="/img/icons/plus-blue.png" alt=""/>
                        </a>

                        <ul>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/icons/education.png" alt=""/>
                                </div>

                                <div className="content">
                                    <h3>“Военный университет” Министерства обороны Российской Федерации, 2015 г.</h3>

                                    <h4>“Перевод и переводоведение”</h4>

                                    <p>Высшее образование Лингвист, Переводчик</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="plank education-additional" ref={this.education_additional_ref}>
                        <h2>Дополнительное образование</h2>

                        <a href="#" className="create" onClick={this.toggleEducationAdditionalForm}>
                            <img src="/img/icons/plus-blue.png" alt=""/>
                        </a>

                        <ul>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/icons/education-additional.png" alt=""/>
                                </div>

                                <div className="content">
                                    <h4>Geek Brains, 2018</h4>

                                    <h4>Факультет Веб-разработки</h4>

                                    <p><a href="#" className="download">Смотреть сертификат</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="plank skills" ref={this.skills_ref}>
                        <h2>Навыки</h2>

                        <a href="#" className="create" onClick={this.toggleSkillsForm}>
                            <img src="/img/icons/plus-blue.png" alt=""/>
                        </a>

                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>

                <div className="person-events">
                    <h2>Ближайшие события</h2>

                    <ul>
                        <li>
                            <div className="img-wrapper">
                                <img src="/img/events/yap.png" alt=""/>
                            </div>
                            <h4>Студенческая олимпиада «Я — профессионал»</h4>
                            <p>Олимпиада дает возможности для развития в лучших вузах страны и открывает перспективы трудоустройства в крупнейшие компании</p>
                        </li>
                        <li>
                            <div className="img-wrapper">
                                <img src="/img/events/best-social-project.png" alt=""/>
                            </div>
                            <h4>«Лучший социальный проект года»</h4>
                            <p>Проект нацелен на популяризацию социального предпринимательства</p>
                        </li>
                        <li>
                            <div className="img-wrapper">
                                <img src="/img/events/dobrovolec.png" alt=""/>
                            </div>
                            <h4>«Доброволец России»</h4>
                            <p>Всероссийский конкурс лучших добровольческих инициатив</p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default PagePerson;
