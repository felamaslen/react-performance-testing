import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Modifications from '../../components/Modifications';
import CurrentState from '../../components/CurrentState';
import NotOptimised from '../NotOptimised';
import Optimise1 from '../Optimise1';
import Optimise2 from '../Optimise2';

import './style.scss';

function Root({ stateString, ...props }) {
    return (
        <div className="react-perf-testing-root">
            <div className="row">
                <Modifications {...props} />
                <CurrentState state={stateString} />
            </div>
            <div className="row">
                <NotOptimised />
                <Optimise1 />
                <Optimise2 />
            </div>
        </div>
    );
}

Root.propTypes = {
    stateString: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    stateString: JSON.stringify(state),
    numValues: state.values.length,
    foo: state.foo
});

const mapDispatchToProps = dispatch => ({
    onChangeNumValues: numValues => dispatch({ type: 'NUM_VALUES_CHANGED', numValues }),
    onChangeFoo: () => dispatch({ type: 'FOO_TOGGLED' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);

