import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Forecastday extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {day} = this.props;
        return (
            <div className="forecastday-container">
                <div className="forecastday-inner">
                    <div className="forecast-image">
                        <FontAwesomeIcon icon="sun" size="3x" />
                    </div>
                    <div className="forecast-weather">{day.avgtemp_f}&deg;</div>
                    <div className="high-low-container">
                        <div className="high">{ day.maxtemp_f }&deg;</div>/<div className="low">{ day.mintemp_f }&deg;</div>
                    </div>
                </div>
            </div>
        );
    }
}