import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import Switch from 'react-switch';
import CurrentWeather from './components/current-weather/index';
import ForecastWeather from './components/forecast/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faCloud,
  faCloudMoon,
  faTimes,
  faCloudSun,
  faCloudDrizzle,
  faCloudSunRain,
  faCloudMoonRain,
  faFog,
  faCloudSnow,
  faCloudSleet,
  faThunderstormSun,
  faThunderstormMoon,
  faSnowBlowing,
  faCloudShowers,
  faCloudShowersHeavy,
  faCloudHailMixed,
  faCloudHail,
  faThunderstorm
} from '@fortawesome/pro-solid-svg-icons';

library.add(
  faSun,
  faMoon,
  faCloud,
  faCloudMoon,
  faTimes,
  faCloudSun,
  faCloudDrizzle,
  faCloudSunRain,
  faCloudMoonRain,
  faFog,
  faCloudSnow,
  faCloudSleet,
  faThunderstormSun,
  faThunderstormMoon,
  faSnowBlowing,
  faCloudShowers,
  faCloudShowersHeavy,
  faCloudHailMixed,
  faCloudHail,
  faThunderstorm
);

const WEATHER_KEY = "e97dcf86c1bc479c82f204150190408";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Los Angeles",
      numForecastDays: 5,
      isLoading: true,
      editLocation: false,
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
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
        cityName: data.location.name,
        regionName: data.location.region,
        countryName: data.location.country,
        temp_f: data.current.temp_f,
        temp_c: data.current.temp_c,
        condition: data.current.condition.text,
        conditionCode: data.current.condition.code,
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

  handleChange(checked) {
    this.setState({checked});
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

    let {isLoading, cityName, regionName, temp_f, temp_c, editLocation, condition, forecastdays, isDay, checked, conditionCode, countryName} = this.state;
    let locationLabel = null;
    if (countryName !== 'United States of America' && countryName !== 'USA') {
      if (regionName === "" && countryName === "Hong Kong") {
        locationLabel = `${cityName}`;
      } else if (regionName === "ÅŒsaka") {
        locationLabel = `${cityName}, Osaka, ${countryName}`
      } else if (regionName === "HokkaidÅ") {
        locationLabel = `${cityName}, Hokkaido, ${countryName}`
      } else if (regionName === "HyÅgo") {
        locationLabel = `${cityName}, Hyōgo, ${countryName}`
      } else if (regionName === "KÅchi") {
        locationLabel = `${cityName}, Kōchi, ${countryName}`
      } else if (regionName === "KyÅto") {
        locationLabel = `${cityName}, Kyoto, ${countryName}`
      } else if (regionName === "ÅŒita") {
        locationLabel = `${cityName}, Oita, ${countryName}`
      } else if (countryName === "Singapore" || countryName === "Vietnam") {
        locationLabel = `${cityName}, ${countryName}`;
      } else {
        locationLabel = `${cityName}, ${regionName}, ${countryName}`;
      }
    } else {
      locationLabel = `${cityName}, ${regionName}`;
    }
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
                <p onClick={this.editLocation}>{locationLabel}</p>
              }
            </div>
            <label>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                uncheckedIcon = {
                  <div
                  style= {{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    paddingRight: 2
                  }}
                  >&deg;F</div>
                }
                checkedIcon = {
                  <div
                  style= {{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    paddingLeft: 2
                  }}
                  >&deg;C</div>
                }
              />
            </label>
          </div>
          {isLoading && <h3>Loading...</h3>}
          {!isLoading &&
          <div className="current-weather-section">
            <CurrentWeather
              location={cityName}
              temp_f={temp_f}
              temp_c={temp_c}
              conditionCode = {conditionCode}
              condition={condition}
              day={isDay}
              checked={checked}
              eventEmitter={this.props.eventEmitter}
            />
          </div>
          }
          <div className="forecast-section">
            <ForecastWeather
              forecastdays={forecastdays}
              checked={checked}
              eventEmitter={this.props.eventEmitter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
