import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Chat from './components/pages/Chat';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import RestrictedRoute from './components/util/RestrictedRoute';
import Error404 from './components/pages/Error404';

function App ({history, logged}) {
	return (
		<div className="App">
			<ConnectedRouter history={history}>
					<Switch>
						<RestrictedRoute exact logged={logged} path="/" component={Chat} />
						<Route path="/signin" component={Login} />
						<Route path="/signup" component={Register} />
						<Route path="*" component={Error404} />
					</Switch>
			</ConnectedRouter>
		</div>
	);
}

const mapStateToProps = store => ({
	logged: store.authReducer.logged
})

export default connect(mapStateToProps)(App);
