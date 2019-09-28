import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink as Link, Switch} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';
import {withTracker} from 'meteor/react-meteor-data';

import PageIndex from './Page/Index.jsx';
import PageCabinetPerson from './Page/Cabinet/Person.jsx';
import PageCabinetEducation from './Page/Cabinet/Education.jsx';
import PageCabinetEmployer from './Page/Cabinet/Employer.jsx';
import PageCabinetGovernment from './Page/Cabinet/Government.jsx';
import PageEducationList from './Page/Education/List.jsx';
import PageEducationView from './Page/Education/View.jsx';
import PageEmployerList from './Page/Employer/List.jsx';
import PageEmployerView from './Page/Employer/View.jsx';
import PagePersonList from './Page/Person/List.jsx';
import PagePersonView from './Page/Person/View.jsx';

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
                <header>
                    <nav>
                        <ul>
                            <li className="logo">
                                <Link to="/">megaproject Х</Link>
                            </li>

                            <li>
                                <Link to="/person">Люди</Link>
                            </li>

                            <li>
                                <Link to="/employer">Организации</Link>
                            </li>

                            <li>
                                <Link to="/education">Учебные заведения</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
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

                        <Route path="/education" exact component={PageEducationList}/>
                        <Route path="/education/view" component={PageEducationView}/>

                        <Route path="/employer" exact component={PageEmployerList}/>
                        <Route path="/employer/view" component={PageEmployerView}/>

                        <Route path="/person" exact component={PagePersonList}/>
                        <Route path="/person/view" component={PagePersonView}/>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default AppRouter;
