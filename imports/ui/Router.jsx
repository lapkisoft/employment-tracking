import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';

import PageIndex from './Page/Index.jsx';
import PageError from './Page/Error.jsx';
import PageCustomer from './Page/Customer/Index.jsx';
import PageEducation from './Page/Education/Index.jsx';
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

                    <Route path="/customer" component={PageCustomer}/>
                    <Route path="/education" component={PageEducation}/>
                    <Route path="/government" component={PageGovernment}/>
                    <Route path="/person" component={PagePerson}/>

                    <Route path="" component={PageError}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
