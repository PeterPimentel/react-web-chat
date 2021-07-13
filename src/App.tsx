import React from 'react';
import { ConnectedChat } from './components/ConnectedChat/ConnectedChat';
import { ConnectedFooter } from './components/ConnectedFooter/ConnectedFooter';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <ConnectedChat />
            <ConnectedFooter />
        </div>
    );
}

export default App;
