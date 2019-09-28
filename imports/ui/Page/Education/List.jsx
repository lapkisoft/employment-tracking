import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEducationList extends React.Component {
    render() {
        return (
            <div>
                <h1>PageEducationList</h1>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEducationList);
