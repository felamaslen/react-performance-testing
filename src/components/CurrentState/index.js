import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

import './style.scss';

export default function CurrentState({ state }) {
    return (
        <div className="section current-state">
            <h2>{'Current state:'}</h2>
            <JSONPretty id="state-json" json={state} />
        </div>
    );
}

CurrentState.propTypes = {
    state: PropTypes.string.isRequired
};

