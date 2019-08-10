import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import WeatherIcon from '../weather-icon'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { temp, condition } = this.props;
        return (
            <div className="weather-container">
                <div className="weather-inner">
                    <div className="current-weather">{ temp }&deg;</div>
                    <WeatherIcon {...this.props} />
                </div>
                <div className="weather-condition">
                    <p>{ condition }</p>
                </div>
            </div>
        );
    }
}