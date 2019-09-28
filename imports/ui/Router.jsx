import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';

import PageIndex from './Page/Index.jsx';
import PageError from './Page/Error.jsx';
import PageAuth from './Page/Auth.jsx';
import PageEmployer from './Page/Employer/Index.jsx';
import PageEmployerWorkCreate from './Page/Employer/WorkCreate.jsx';
import PageEmployerWorkUpdate from './Page/Employer/WorkUpdate.jsx';
import PageUniversity from './Page/University/Index.jsx';
import PageGovernment from './Page/Government/Index.jsx';
import PagePerson from './Page/Person/Index.jsx';
import PagePersonSettings from './Page/Person/Settings.jsx';
import PageAddEducation from './Page/AddEducationForm/Index.jsx';

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

                    <Route path="/auth" component={PageAuth}/>

                    <Route path="/employer" exact component={PageEmployer}/>
                    <Route path="/employer/user/:user_id/work/create" component={PageEmployerWorkCreate}/>
                    <Route path="/employer/user/:user_id/work/update/:work_id" component={PageEmployerWorkUpdate}/>

                    <Route path="/university" component={PageUniversity}/>
                    <Route path="/government" component={PageGovernment}/>

                    <Route path="/person" exact component={PagePerson}/>
                    <Route path="/person/settings" exact component={PagePersonSettings}/>

                    <Route path="/add-education" component={PageAddEducation}/>

                    <Route path="" component={PageError}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
