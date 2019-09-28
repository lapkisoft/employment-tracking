import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEducationView extends React.Component {
    render() {
        return (
            <div>
                <h1>PageEducationView</h1>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEducationView);
