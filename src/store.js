import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';

import createRootReducer from './reducers';

const logger = createLogger({
    collapsed: true
});

export default initialState => {
    const createStoreWithMiddleware = compose(applyMiddleware(logger))(createStore);

    const store = createStoreWithMiddleware(
        createRootReducer(initialState),
        initialState,
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            // eslint-disable-next-line global-require
            store.replaceReducer(require('./reducers').default(initialState));
        });
    }

    return store;
};

