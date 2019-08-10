import React, { Component } from 'react';
import './App.scss';
import axios from "axios";
import CurrentWeather from './components/current-weather/index';
import ForecastWeather from './components/forecast/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faCloud, faTimes, faCloudSun } from '@fortawesome/pro-solid-svg-icons';

library.add(faSun, faCloud, faTimes, faMoon, faCloudSun);

const WEATHER_KEY = "e97dcf86c1bc479c82f204150190408";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Los Angeles",
      numForecastDays: 5,
      isLoading: true,
      editLocation: false
    }
  }

  updateWeather() {
    const { cityName } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=5`;
    axios.get(URL).then((res) => {
      console.log("DATA: ", res);
      return res.data;
    })
    .then((data) => {
      this.setState({
        isLoading: false,
        temp: data.current.temp_f,
        condition: data.current.condition.text,
        isDay: data.current.is_day,
        forecastdays: data.forecast.forecastday
      })
    })
    .catch((err) => {
      if(err) {
        console.error("Cannot fetch data from API, ", err);
      }
    });
  }

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", (data) => {
      this.setState({
        cityName: data
      }, () => this.updateWeather());
    })
  }

  editLocation = () => {
    this.setState({
      editLocation: !this.state.editLocation
    })
  }

  onLocationNameChange(e) {
    this.setState({ locationName: e.target.value });
  }

  onSelectCity(e) {
    if (e.keyCode === 13) {
      const {locationName} = this.state;
      const {eventEmitter} = this.props;

      eventEmitter.emit("updateWeather", locationName);
      this.setState({
        editLocation: false
      });
    }
  }

  render() {

    const {isLoading, cityName, temp, editLocation, condition, forecastdays, isDay} = this.state;
    return (
      <div className="app-container">
        <div className="container sunny">
          <div className="weather-settings">
            <div className="location-input">
              {editLocation &&
                <div className="form-container">
                  <input
                    id="location-name"
                    type="text"
                    placeholder={ cityName }
                    onKeyDown={this.onSelectCity.bind(this)}
                    onChange= {this.onLocationNameChange.bind(this)}
                    onBlur={() => this.setState({editLocation:false})}
                  />
                  <button onClick={this.editLocation}>
                    <FontAwesomeIcon icon="times" />
                  </button>
                </div>
              }
              {!editLocation &&
                <p onClick={this.editLocation}>{ cityName }</p>
              }
            </div>
            <div className="unit-toggle">
              <p>O</p>
            </div>
          </div>
          {isLoading && <h3>Loading...</h3>}
          {!isLoading &&
          <div className="current-weather-section">
            <CurrentWeather
              location={cityName}
              temp={temp}
              condition={condition}
              day={isDay}
              eventEmitter={this.props.eventEmitter}
            />
          </div>
          }
          <div className="forecast-section">
            <ForecastWeather
              forecastdays={forecastdays}
              eventEmitter={this.props.eventEmitter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
