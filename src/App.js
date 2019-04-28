import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Chat from './components/pages/Chat';
import Login from './components/pages/Login';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route exact path="/" component={Login} />
				</Router>
			</div>
		);
	}
}

export default App;
