import React from 'react';
import WeatherIcon from '../weather-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faLongArrowAltUp,
    faWind,
    faHumidity
} from '@fortawesome/pro-solid-svg-icons';
library.add(
    faLongArrowAltUp,
    faWind,
    faHumidity
);

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { temp_f, temp_c, wind_mph, wind_kph, wind_dir, humidity, condition, wind_degree, checked } = this.props;
        let temp, wind_speed, wind_unit = null;
        if (!checked) {
            temp = temp_f;
            wind_speed = wind_mph;
            wind_unit = 'MPH';
        } else {
            temp = temp_c;
            wind_speed = wind_kph;
            wind_unit = 'KPH';
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
                <div className="weather-details">
                    <div className="first-column">
                        <table>
                            <tbody>
                                <tr>
                                    <td><FontAwesomeIcon icon='wind' /></td>
                                    <td><FontAwesomeIcon transform={{ rotate:`${wind_degree}` }} icon='long-arrow-alt-up' /> {wind_dir} {wind_speed} {wind_unit}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="second-column">
                        <table>
                            <tbody>
                                <tr>
                                    <td><FontAwesomeIcon icon='humidity' /></td>
                                    <td>{humidity}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}