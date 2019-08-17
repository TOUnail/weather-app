import React from 'react';

import WeatherIcon from '../weather-icon'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { temp_f, temp_c, condition, checked } = this.props;
        let temp = null;

        if (!checked) {
            temp = temp_f
        } else {
            temp = temp_c
        }
        
        return (
            <div className="weather-container">
                <div className="weather-inner">
                    <div className="current-weather">
                        <span className="current-temp">{ temp }</span><span className="current-degrees">&deg;</span>
                    </div>
                    <WeatherIcon {...this.props} />
                </div>
                <div className="weather-condition">
                    <p>{ condition }</p>
                </div>
            </div>
        );
    }
}