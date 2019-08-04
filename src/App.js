import React, { Component } from 'react';
import './App.scss';
import axios from "axios";
import CurrentWeather from './components/current-weather/index';
import ForecastWeather from './components/forecast/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faTimes);

const WEATHER_KEY = "8db5961a12875a55c2ec1e5cfd3cf5fa";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Los Angeles",
      forcastDays: 5,
      isLoading: true,
      changeLocation: false
    }
  }

  componentDidMount() {
    const { cityName, forcastDays } = this.state;
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${WEATHER_KEY}`;
    axios.get(URL).then((res) => {
      console.log("DATA: ", res);
      return res.data;
    })
    .then((data) => {
      this.setState({
        isLoading: false,
        temp: data.list[0].main.temp,
        temp_min: data.list[0].main.temp_min,
        temp_max: data.list[0].main.temp_max
      })
    })
    .catch((err) => {
      if(err) {
        console.error("Cannot fetch data from API, ", err);
      }
    })
  }

  changeLocation = () => {
    this.setState({
      changeLocation: !this.state.changeLocation
    })
  }


  render() {

    const {isLoading, cityName, temp, temp_min, temp_max, changeLocation} = this.state;

    return (
      <div className="app-container">
        <div className="container sunny">
          <div className="weather-settings">
            <div className="location-input">
              {changeLocation &&
                <div className="form-container">
                  <input id="location-name" type="text" placeholder={ cityName } />
                  <button onClick={this.changeLocation}>
                    <FontAwesomeIcon icon="times" />
                  </button>
                </div>
              }
              {!changeLocation &&
                <p onClick={this.changeLocation}>{ cityName }</p>
              }
            </div>
            <div className="unit-toggle">
              <p>O</p>
            </div>
          </div>
          {isLoading && <h3>Loading...</h3>}
          {!isLoading &&
          <div className="current-weather-section">
            <CurrentWeather location={cityName} temp={temp} temp_min={temp_min} temp_max={temp_max} />
          </div>
          }
          <div className="forecast-section">
            <ForecastWeather />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
