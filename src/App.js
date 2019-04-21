import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Chat from './components/pages/Chat';
import SkeletonChat from './components/pages/SkeletonChat';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route exact path="/" component={Chat} />
					<Route path="/skeleton" component={SkeletonChat} />
				</Router>
			</div>
		);
	}
}

export default App;
