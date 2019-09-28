import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';

import PageIndex from './Page/Index.jsx';
import PagePersonIndex from './Page/Person/Index.jsx';
import PageEducationIndex from './Page/Education/Index.jsx';
import PageEmployerIndex from './Page/Employer/Index.jsx';
import PageGovernmentIndex from './Page/Government/Index.jsx';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={PageIndex}/>
                    <Route path="/person" exact component={PagePersonIndex}/>
                    <Route path="/education" exact component={PageEducationIndex}/>
                    <Route path="/employer" exact component={PageEmployerIndex}/>
                    <Route path="/government" exact component={PageGovernmentIndex}/>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;
