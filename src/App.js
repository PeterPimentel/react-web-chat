import React, { Component } from 'react';
import Header from './components/Header';
import ChatConatiner from './components/ChatContainer';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ChatConatiner />
			</div>
		);
	}
}

export default App;
