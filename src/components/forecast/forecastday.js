import React from 'react';

import WeatherIcon from '../weather-icon'

export default class Forecastday extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {day, checked, dayWeek} = this.props;
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
        let a = new Date(dayWeek*1000);
        const days = [
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat',
            'Sun'
        ]
        let dayOfWeek = days[a.getDay()];
        console.log(this.props)
        return (
            <div className="forecastday-container">
                <div className="forecastday-inner">
                    <p>{dayOfWeek}</p>
                    <WeatherIcon conditionCode={day.condition.code} day={1} />
                    <div className="forecast-weather">{avgtemp}&deg;</div>
                    <div className="high-low-container">
                        <div className="high">{ maxtemp }&deg;</div>/<div className="low">{ mintemp }&deg;</div>
                    </div>
                </div>
            </div>
        );
    }
}