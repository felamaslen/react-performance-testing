import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

function NotOptimised({ squares }) {
    const src = `const mapStateToProps = state => ({
    squares: state.values.map(value => value ** 2),
    foo: state.foo
});

export default connect(mapStateToProps)(NotOptimised);`;

    return (
        <div className="section container-example container-not-optimised">
            <h2>{'Container example #0'}</h2>
            <h3>{'not optimised'}</h3>
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

NotOptimised.propTypes = {
    squares: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    squares: state.values.map(value => value ** 2),
    foo: state.foo
});

export default connect(mapStateToProps)(NotOptimised);

