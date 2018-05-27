import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export default class LastRenderTime extends Component {
    static propTypes = {
        time: PropTypes.instanceOf(Date).isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            warn: true,
            timer: this.getWarnTimer()
        };
    }
    getWarnTimer() {
        return setTimeout(() => this.setState({ warn: false }), 1000);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.time < this.props.time) {
            clearTimeout(this.state.timer);

            this.setState({ warn: true, timer: this.getWarnTimer() });
        }
    }
    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }
    render() {
        const className = classNames('last-render', { warn: this.state.warn });

        return (
            <span className={className}>
                {'Last render time: '}{this.props.time.toISOString()}
            </span>
        );
    }
}

