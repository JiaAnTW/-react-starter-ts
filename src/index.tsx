import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

let rootDOMElement = document.getElementById('root');

if (!rootDOMElement) {
    rootDOMElement = document.createElement('div');
    rootDOMElement.setAttribute('id', 'root');
    document.querySelector('body')?.append(rootDOMElement);
}

const root = ReactDOM.createRoot(rootDOMElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
