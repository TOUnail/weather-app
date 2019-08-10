import React from 'react';

import WeatherIcon from '../weather-icon'

export default class Forecastday extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {day} = this.props;
        return (
            <div className="forecastday-container">
                <div className="forecastday-inner">
                    <WeatherIcon condition={day.condition.text} day={1} />
                    <div className="forecast-weather">{day.avgtemp_f}&deg;</div>
                    <div className="high-low-container">
                        <div className="high">{ day.maxtemp_f }&deg;</div>/<div className="low">{ day.mintemp_f }&deg;</div>
                    </div>
                </div>
            </div>
        );
    }
}