import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Chat from './components/pages/Chat';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Error404 from './components/pages/Error404';

function App ({history}) {
	return (
		<div className="App">
			<ConnectedRouter history={history}>
				<Router>
					<Switch>
						<Route exact path="/" component={Chat} />
						<Route path="/signin" component={Login} />
						<Route path="/signup" component={Register} />
						<Route path="*" component={Error404} />
					</Switch>
				</Router>
			</ConnectedRouter>
		</div>
	);
}

export default App;
