import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import initialState from './initialState';
import createStore from './store';

const store = createStore(initialState);

function renderApp(AppComponent = App) {
    render(<AppComponent store={store} />, document.getElementById('root'));
}

if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('./components/App', () => renderApp(require('./components/App').default));
}

renderApp();

