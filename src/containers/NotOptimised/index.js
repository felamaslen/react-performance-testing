import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

function NotOptimised({ squares }) {
    return (
        <div className="container-example container-not-optimized">
            <h2>{'Container example #0 (not optimised)'}</h2>
            <span className="last-render">
                {'Last render time: '}{new Date().toISOString()}
            </span>
            <span className="data">
                <JSONPretty id="data-json-optimise-0" json={JSON.stringify(squares)} />
            </span>
        </div>
    );
}

NotOptimised.propTypes = {
    squares: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    squares: state.values.map(value => value ** 2)
});

export default connect(mapStateToProps)(NotOptimised);

