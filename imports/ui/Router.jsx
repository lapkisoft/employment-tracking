import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import {withTracker} from 'meteor/react-meteor-data';

import PageIndex from './Page/Index.jsx';
import PageCabinetPerson from './Page/Cabinet/Person.jsx';
import PageCabinetEducation from './Page/Cabinet/Education.jsx';
import PageCabinetEmployer from './Page/Cabinet/Employer.jsx';
import PageCabinetGovernment from './Page/Cabinet/Government.jsx';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: Accounts.user()
        };
    }

    render() {
        let role = this.state.user && this.state.user.profile.role;

        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={PageIndex}/>
                    <Route path="/cabinet" exact render={(props) => {
                        let user = Accounts.user();

                        props.history.replace(user && user.profile.role ? `/cabinet/${user.profile.role}` : '/');
                    }}/>
                    <Route path="/cabinet/person" component={PageCabinetPerson}/>
                    <Route path="/cabinet/education" component={PageCabinetEducation}/>
                    <Route path="/cabinet/employer" component={PageCabinetEmployer}/>
                    <Route path="/cabinet/government" component={PageCabinetGovernment}/>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;
