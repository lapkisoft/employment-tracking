import {Meteor} from 'meteor/meteor';
import React from 'react';
import {NavLink as Link} from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <section className="section-specialty-view">
                <div className="page-navigation">
                    <Link to="/specialty">Назад</Link>
                </div>

                <div className="specialty-header">
                    <div className="img-wrapper">
                        <img src="/img/specialty/montajnik-full.png" alt=""/>
                    </div>

                    <div className="content">
                        <h1>Монтажник трубопроводов</h1>
                        <h3>ОКСО: 2.08.01.02</h3>
                    </div>
                </div>

                <div className="specialty-header-controls">
                    <div className="rating up">
                        <small>Рейтинг</small>
                        <span>68</span>
                    </div>
                    <a href="#">Подписаться</a>
                </div>

                <div className="specialty-about">
                    <h1 className="block-name">О специальности</h1>
                    <p className="about">
                        Московский государственный университет имени Ломоносова — одно из самых крупных и престижных учебных заведений страны. Кроме того, это знаковая
                        достопримечательность столицы — полюбоваться высотным зданием на Воробьевых горах спешат практически все гости Москвы. Стоит, однако, заметить, что эта
                        высотка 1953-го года постройки главное, но далеко не единственное здание университета — всего в его распоряжении более 600 сооружений.
                    </p>
                    <div className="split-line"></div>
                    <div className="images">
                        <div className="img-wrapper">
                            <img src="/img/employers/about-1.png" alt=""/>
                        </div>
                        <div className="img-wrapper">
                            <img src="/img/employers/about-2.png" alt=""/>
                        </div>
                        <div className="img-wrapper">
                            <img src="/img/employers/about-3.png" alt=""/>
                        </div>
                        <div className="img-wrapper">
                            <img src="/img/employers/about-4.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="specialty-additional">
                    <div className="specialty-education">
                        <h2>Кто обучает специальности</h2>

                        <ul className="education-list">
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/education/mgu.png" alt=""/>
                                </div>

                                <div className="name">«Московский государственный университет имени М.В.Ломоносова»</div>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/education/sgups.png" alt=""/>
                                </div>

                                <div className="name">Сибирский Государственный Университет Путей Сообщения</div>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/education/kfu.png" alt=""/>
                                </div>

                                <div className="name">Казанский (Приволжский) Федеральный Университет</div>
                            </li>

                            <li className="more">
                                <a href="#">еще <span>+254</span> образовательных учреждений</a>
                            </li>
                        </ul>
                    </div>

                    <div className="specialty-personal">
                        <h2>Работают по специальности</h2>

                        <ul className="personal-list">
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/person/01.png" alt=""/>
                                </div>
                                <div className="name">Глазков Федор</div>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/person/02.png" alt=""/>
                                </div>
                                <div className="name">Гольц Инна</div>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/person/03.png" alt=""/>
                                </div>
                                <div className="name">Ильин Елисей</div>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="/img/person/04.png" alt=""/>
                                </div>
                                <div className="name">Дукачёв Глеб</div>
                            </li>
                            <li className="more">
                                <a href="#">еще <b>+254</b> профессионалов</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
