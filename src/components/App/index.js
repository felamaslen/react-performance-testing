import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Root from '../../containers/Root';

export default function App({ store }) {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

