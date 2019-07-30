import React from 'react';

import './style.scss';

export default class ForecastWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //https://codepen.io/davallan/pen/amqRzv
    render() {
        return <div className="forecast-container">
                    <div className="background-1"></div>
                    <div className="background-2"></div>
                </div>;
    }
}