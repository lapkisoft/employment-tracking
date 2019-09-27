import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';

import MainPage from './pages/MainPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Main page</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/contacts" component={ContactPage}/>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
// export default withTracker(() => {
//     return {
//         contacts: Contacts.find({}, {sort: {createdAt: -1}}).fetch()
//     };
// })(App);
