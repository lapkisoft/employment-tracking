import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '../imports/ui/App.jsx';

import {Settings as LuxonSettings} from 'luxon';

LuxonSettings.defaultLocale = 'ru';

Meteor.startup(() => {
    render(<App/>, document.getElementById('app'));
});
