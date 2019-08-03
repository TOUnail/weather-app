import React from 'react';

import './style.scss';

export default class ForecastWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //https://codepen.io/davallan/pen/amqRzv
    //http://template.8guild.com/appica/android/index.html
    render() {
        return <div className="forecast-container">
                    <div className="test-container">
                        <p>Forecast</p>
                    </div>
                </div>;
    }
}