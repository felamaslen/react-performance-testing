import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

function Optimise1({ squares }) {
    const src = `const mapStateToProps = state => ({
    squares: state.values.map(value => value ** 2)
});

export default connect(mapStateToProps)(Optimise1);
`;

    return (
        <div className="section container-example container-optimise1">
            <h2>{'Container example #1'}</h2>
            <h3>{'removed unnecessary state'}</h3>
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

Optimise1.propTypes = {
    squares: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    squares: state.values.map(value => value ** 2)
});

export default connect(mapStateToProps)(Optimise1);

