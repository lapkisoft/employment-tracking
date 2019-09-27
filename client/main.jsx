import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import Router from '../imports/ui/Router.jsx';

import {Settings as LuxonSettings} from 'luxon';

LuxonSettings.defaultLocale = 'ru';

Meteor.startup(() => {
    render(<Router/>, document.getElementById('app'));
});
