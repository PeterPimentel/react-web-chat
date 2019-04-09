import React, { Component } from 'react';
import Header from './components/Header';
import ChatConatiner from './components/ChatContainer';
import Footer from './components/Footer';
import { Scrollbars } from 'react-custom-scrollbars';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Scrollbars autoHide style={{ width: '100vw', height: '100vh' }}>
					<Header />
					<ChatConatiner />
					<Footer />
				</Scrollbars>
			</div>
		);
	}
}

export default App;
