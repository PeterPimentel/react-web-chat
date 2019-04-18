import React, { Component } from 'react';
import Chat from './components/pages/Chat';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route path="/" component={Chat} />
				</Router>
			</div>
		);
	}
}

export default App;
