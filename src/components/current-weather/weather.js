import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { temp, temp_min, temp_max } = this.props;
        return (
            <div className="weather-container">
                <div className="weather-inner">
                    <div className="current-weather">{ temp }&deg;</div>
                    <div className="image">
                        <FontAwesomeIcon icon="sun" size="3x" />
                    </div>
                </div>
                <div className="high-low-container">
                    <div className="high">{ temp_max }&deg;</div>/<div className="low">{ temp_min }&deg;</div>
                </div>
            </div>
        );
    }
}