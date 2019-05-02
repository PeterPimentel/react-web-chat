import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Chat from './components/pages/Chat';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Error404 from './components/pages/Error404';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={Chat} />
						<Route path="/signin" component={Login} />
						<Route path="/signup" component={Register} />
						<Route path="*" component={Error404} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
