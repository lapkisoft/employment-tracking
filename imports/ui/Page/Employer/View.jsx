import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEmployerView extends React.Component {
    render() {
        return (
            <div>
                <div className="organization-header">
                    <div className="img-wrapper">
                        <img src="/img/employers/rostelecom.png" alt=""/>
                    </div>
                    <div className="content">
                        <h1 className="name">ПАО "РОСТЕЛЕКОМ"</h1>
                        <h3 className="city">г. Санкт-Петербург</h3>
                        <h4 className="flow">Текучесть кадров: 2,01%</h4>
                    </div>
                </div>
                <div className="organization-about">
                    <h1 className="block-name">Об организации</h1>
                    <p className="about">ПАО «Ростелеком» (www.company.rt.ru) — крупнейший в России провайдер цифровых услуг и решений, который присутствует во всех сегментах рынка и охватывает миллионы домохозяйств, государственных и частных организаций. «Ростелеком» занимает лидирующие позиции на рынке услуг высокоскоростного доступа в интернет и платного телевидения. Услугами ШПД пользуется свыше 13,0 млн абонентов, платного ТВ — 10,2 млн, из них свыше 5,4 млн подключено к услуге «Интерактивное ТВ»</p>
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

                <div className="organization-content-row">
                    <div className="organization-with-us">
                        <h1 className="block-name">С нами</h1>
                        <div className="block-content">
                            <div className="users">
                                <div className="user">
                                    <div className="img-wrapper">
                                        <img src="/img/employers/user-1.png" alt=""/>
                                    </div>
                                    <p className="name">Глазков Федор</p>
                                </div>
                                <div className="user">
                                    <div className="img-wrapper">
                                        <img src="/img/employers/user-2.png" alt=""/>
                                    </div>
                                    <p className="name">Глазков Федор</p>
                                </div>
                                <div className="user">
                                    <div className="img-wrapper">
                                        <img src="/img/employers/user-3.png" alt=""/>
                                    </div>
                                    <p className="name">Глазков Федор</p>
                                </div>
                                <div className="user">
                                    <div className="img-wrapper">
                                        <img src="/img/employers/user-4.png" alt=""/>
                                    </div>
                                    <p className="name">Глазков Федор</p>
                                </div>
                            </div>
                            <p className="more">ещё + 254 <br />специалистов</p>
                        </div>
                    </div>

                    <div className="organization-tags">
                        <h1 className="block-name">Сферы деятельности</h1>
                        <div className="tags">
                            <div className="tag">Информационные технологии</div>
                            <div className="tag">Интернет</div>
                            <div className="tag">Телеком</div>
                            <div className="tag">IT</div>
                            <div className="tag">Информационные технологии</div>
                            <div className="tag">Интернет</div>
                            <div className="tag">Телеком</div>
                            <div className="tag">IT</div>
                        </div>
                    </div>
                </div>

                <div className="organization-events">
                    <h2>Ближайшие события</h2>

                    <ul>
                        <li>
                            <div className="img-wrapper">
                                <img src="/img/events/cp.jpg" alt=""/>
                            </div>
                            <h4>Студенческая олимпиада «Я — профессионал»</h4>
                            <p>Олимпиада дает возможности для развития в лучших вузах страны и открывает перспективы трудоустройства в крупнейшие компании</p>
                        </li>
                        <li>
                            <div className="img-wrapper">
                                <img src="/img/events/rl.png" alt=""/>
                            </div>
                            <h4>«Лучший социальный проект года»</h4>
                            <p>Проект нацелен на популяризацию социального предпринимательства</p>
                        </li>
                        <li>
                            <div className="img-wrapper">
                                <img src="/img/events/yap.png" alt=""/>
                            </div>
                            <h4>«Доброволец России»</h4>
                            <p>Всероссийский конкурс лучших добровольческих инициатив</p>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEmployerView);
