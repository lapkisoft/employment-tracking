import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEducationView extends React.Component {
    render() {
        return (
            <section className="section-education-view">
                <div className="education-header">
                    <div className="img-wrapper">
                        <img src="/img/education/ngasu.png" alt=""/>
                    </div>

                    <div className="content">
                        <h1>НГАСУ (Сибстрин)</h1>

                        <p>г. Новосибирск</p>
                    </div>
                </div>

                <h1>PageEducationView</h1>
            </section>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEducationView);
