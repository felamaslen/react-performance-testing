import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Modifications({ numValues, foo, onChangeNumValues, onChangeFoo }) {
    return (
        <div className="section modifications">
            <h2>{'Modifications'}</h2>
            <div className="modification modification-num-values">
                <span>{'Containers '}<b>{'should'}</b>{' re-render when changing this slider: '}</span>
                <input type="range"
                    value={numValues}
                    min={0}
                    max={17}
                    step={1}
                    onChange={evt => onChangeNumValues(Number(evt.target.value))}
                />
            </div>
            <div className="modification modification-foo">
                <span>{'Containers should '}<b>{'not'}</b>{' re-render when toggling this tick box: '}</span>
                <input type="checkbox"
                    value={foo}
                    onChange={() => onChangeFoo()}
                />
            </div>
        </div>
    );
}

Modifications.propTypes = {
    numValues: PropTypes.number.isRequired,
    foo: PropTypes.bool.isRequired,
    onChangeNumValues: PropTypes.func.isRequired,
    onChangeFoo: PropTypes.func.isRequired
};

