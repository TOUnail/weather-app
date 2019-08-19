import React from 'react';
import './style.scss';

import Weather from './weather';

export default class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="current-weather-container">
            <Weather {...this.props} />
        </div>
        );
    }
}