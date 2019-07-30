import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="weather-container">
                <div className="weather-settings">
                    <FontAwesomeIcon icon="cog" />
                </div>
                <div className="weather-inner">
                    <div className="current-weather">79&deg;</div>
                    <div className="image">
                        <FontAwesomeIcon icon="sun" size="3x" />
                    </div>
                </div>
                <div className="high-low-container">
                    <div className="high">84&deg;</div>/<div className="low">54&deg;</div>
                </div>
            </div>
        );
    }
}