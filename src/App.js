import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Chat from './components/pages/Chat';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route exact path="/" component={Chat} />
				</Router>
			</div>
		);
	}
}

export default App;
