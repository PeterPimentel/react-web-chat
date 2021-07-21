import React from 'react';
import { ConnectedChat } from './components/ConnectedChat/ConnectedChat';
import { ConnectedFooter } from './components/ConnectedFooter/ConnectedFooter';
import { ConnectedToast } from './components/ConnectedToast/ConnectedToast';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <ConnectedChat />
            <ConnectedToast />
            <ConnectedFooter />
        </div>
    );
}

export default App;
