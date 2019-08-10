import React from 'react';


import './style.scss';

import Forecastday from "./forecastday";

export default class ForecastWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //https://codepen.io/davallan/pen/amqRzv
    //http://template.8guild.com/appica/android/index.html
    render() {
        const {forecastdays} = this.props;
        return <div className="forecast-container">
                    {forecastdays && forecastdays.map((day, idx) => {
                        return <Forecastday {...this.props} day={day.day} key={idx} />
                    })}
                </div>;
    }
}