import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PagePersonList extends React.Component {
    render() {
        return (
            <div>
                <h1>PagePersonList</h1>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PagePersonList);
