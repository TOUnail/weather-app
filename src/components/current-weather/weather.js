import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { temp, condition, day } = this.props;
        
        let icon = null;
        if (day === 1) {
            if (condition === 'Sunny') {
                icon = 'sun';
            } else if (condition === 'Partly cloudy') {
                icon = 'cloud-sun'
            } else if (condition === 'Mist') {
                icon = 'cloud';
            }
        } else if (day === 0) {
            if (condition === 'Clear') {
                icon = 'moon';
            } else if (condition === 'Partly cloudy') {
                icon = 'cloud-moon'
            } else if (condition === 'Mist') {
                icon = 'cloud';
            }
        }

        return (
            <div className="weather-container">
                <div className="weather-inner">
                    <div className="current-weather">{ temp }&deg;</div>
                    <div className="image">
                        <FontAwesomeIcon icon={icon} size="3x" />
                    </div>
                </div>
                <div className="weather-condition">
                    <p>{ condition }</p>
                </div>
            </div>
        );
    }
}