import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PagePersonView extends React.Component {
    render() {
        return (
            <div>
                <h1>PagePersonView</h1>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PagePersonView);
