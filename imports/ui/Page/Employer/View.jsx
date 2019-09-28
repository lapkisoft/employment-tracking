import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEmployerView extends React.Component {
    render() {
        return (
            <div>
                <h1>PageEmployerView</h1>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEmployerView);
