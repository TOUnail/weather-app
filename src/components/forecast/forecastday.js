import React from 'react';

import WeatherIcon from '../weather-icon'

export default class Forecastday extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {day, checked} = this.props;
        let avgtemp = null;
        let mintemp = null;
        let maxtemp = null;
        if (!checked) {
            avgtemp = day.avgtemp_f;
            maxtemp = day.maxtemp_f;
            mintemp = day.mintemp_f;
        } else {
            avgtemp = day.avgtemp_c;
            maxtemp = day.maxtemp_c;
            mintemp = day.mintemp_c;
        }
        return (
            <div className="forecastday-container">
                <div className="forecastday-inner">
                    <WeatherIcon condition={day.condition.text} day={1} />
                    <div className="forecast-weather">{avgtemp}&deg;</div>
                    <div className="high-low-container">
                        <div className="high">{ maxtemp }&deg;</div>/<div className="low">{ mintemp }&deg;</div>
                    </div>
                </div>
            </div>
        );
    }
}