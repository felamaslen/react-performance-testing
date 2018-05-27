import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

function renderApp(AppComponent = App) {
    render(<AppComponent />, document.getElementById('root'));
}

if (module.hot) {
    module.hot.accept('.', () => renderApp(require('./components/App').default));
}

renderApp();

