import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';

import PageIndex from './Page/Index.jsx';
import PageError from './Page/Error.jsx';
import PageEmployer from './Page/Employer/Index.jsx';
import PageUniversity from './Page/University/Index.jsx';
import PageGovernment from './Page/Government/Index.jsx';
import PagePerson from './Page/Person/Index.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={PageIndex}/>

                    <Route path="/employer" component={PageEmployer}/>
                    <Route path="/university" component={PageUniversity}/>
                    <Route path="/government" component={PageGovernment}/>
                    <Route path="/person" component={PagePerson}/>

                    <Route path="" component={PageError}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
