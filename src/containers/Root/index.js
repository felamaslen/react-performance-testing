import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import CurrentState from '../../components/CurrentState';
import NotOptimised from '../NotOptimised';

function Root({ stateString }) {
    return (
        <div className="react-perf-testing-root">
            <CurrentState state={stateString} />
            <NotOptimised />
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

