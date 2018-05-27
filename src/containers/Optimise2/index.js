import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

function Optimise2({ squares }) {
    const src = `import { createSelector } from 'reselect'

const getValues = state => state.values;

const getSquares = createSelector([getValues], values =>
    values.map(value => value ** 2)
);

const mapStateToProps = state => ({
    squares: getSquares(state)
});

export default connect(mapStateToProps)(Optimise2);`;

    return (
        <div className="section container-example container-optimise1">
            <h2>{'Container example #2'}</h2>
            <h3>{'used reselect'}</h3>
            <span className="last-render">
                {'Last render time: '}{new Date().toISOString()}
            </span>
            <span className="data">
                <span>{'Squares: '}</span>
                <JSONPretty id="data-json-optimise-0" json={JSON.stringify(squares)} />
            </span>
            <span className="src">
                <h4>{'Source:'}</h4>
                <pre>{src}</pre>
            </span>
        </div>
    );
}

Optimise2.propTypes = {
    squares: PropTypes.array.isRequired
};

const getValues = state => state.values;

const getSquares = createSelector([getValues], values =>
    values.map(value => value ** 2)
);

const mapStateToProps = state => ({
    squares: getSquares(state)
});

export default connect(mapStateToProps)(Optimise2);

