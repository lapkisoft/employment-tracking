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
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEmployerView);
