import React, { Component } from 'react';
import Header from './components/Header';
import ChatConatiner from './components/ChatContainer';
import Footer from './components/Footer';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ChatConatiner />
				<Footer/>
			</div>
		);
	}
}

export default App;
