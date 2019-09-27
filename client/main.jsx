import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import Router from '../imports/ui/Router.jsx';

import {Settings as LuxonSettings} from 'luxon';
import {registerLocale, setDefaultLocale} from 'react-datepicker';
import ru from 'date-fns/locale/ru';

LuxonSettings.defaultLocale = 'ru';

registerLocale('ru', ru);
setDefaultLocale('ru');

Meteor.startup(() => {
    render(<Router/>, document.getElementById('app'));
});
