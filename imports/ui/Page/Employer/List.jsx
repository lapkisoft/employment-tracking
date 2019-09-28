import {Meteor} from 'meteor/meteor';
import React from 'react';

import {withTracker} from 'meteor/react-meteor-data';

class PageEmployerList extends React.Component {
    render() {
        return (
            <div>
                <h1>PageEmployerList</h1>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(PageEmployerList);
