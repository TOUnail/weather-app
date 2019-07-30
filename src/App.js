import React, { Component } from 'react';
import './App.scss';
import CurrentWeather from './components/current-weather/index';
import ForecastWeather from './components/forecast/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faCog)

class App extends Component {
  render() {
    return (
      <div className="app-container sunny">
        <div className="container">
          <div className="current-weather-section">
            <CurrentWeather />
          </div>
          <div className="forecast-section">
            <ForecastWeather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
