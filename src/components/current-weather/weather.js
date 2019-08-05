import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <div className="image">
                        <FontAwesomeIcon icon="sun" size="3x" />
                    </div>
                </div>
                <div className="weather-condition">
                    <p>{ condition }</p>
                </div>
            </div>
        );
    }
}