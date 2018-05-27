import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

function Root({ stateString }) {
    return (
        <div className="react-perf-testing-root">
            <JSONPretty id="state-json" json={stateString} />
        </div>
    );
}

Root.propTypes = {
    stateString: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    stateString: JSON.stringify(state)
});

export default connect(mapStateToProps)(Root);

