import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { conditionCode, day } = this.props;
        
        let icon = null;
        
       switch (conditionCode) {
            case 1000:
                if (day === 1) {
                    icon = 'sun'
                } else {
                    icon = 'moon'
                }
                break;
            case 1003:
                if (day === 1) {
                    icon = 'cloud-sun';
                } else {
                    icon = 'cloud-moon';
                }
                break;
            case 1006:
            case 1009:
                icon = 'cloud';
                break;
            case 1030:
            case 1135:
            case 1147:
                icon = 'fog';
                break;
            case 1063:
            case 1180:
            case 1186:
            case 1192:
                if (day === 1) {
                    icon = 'cloud-sun-rain';
                } else {
                    icon = 'cloud-moon-rain';
                }
                break;
            case 1066:
            case 1213:
            case 1216:
            case 1219:
            case 1222:
            case 1225:
            case 1255:
            case 1258:
            case 1279:
            case 1282:
                icon = 'cloud-snow'
                break;
            case 1069:
            case 1072:
            case 1168:
            case 1171:
            case 1204:
            case 1207:
            case 1249:
            case 1252:
                icon = 'cloud-sleet';
                break;
            case 1087:
            case 1273:
                if (day === 1) {
                    icon = 'thunderstorm-sun';
                } else {
                    icon = 'thunderstorm-moon';
                }
                break;
            case 1114:
            case 1117:
                icon = 'snow-blowing';
                break;
            case 1150:
            case 1153:
            case 1183:
            case 1198:
                icon = 'cloud-drizzle';
                break;
            case 1189:
            case 1240:
                icon = 'cloud-showers';
                break;
            case 1195:
            case 1243:
            case 1246:
                icon = 'cloud-showers-heavy';
                break;
            case 1201:
                icon = 'cloud-hail-mixed'
                break;
            case 1237:
            case 1261:
            case 1264:
                icon = 'cloud-hail';
                break;
            case 1276:
                icon = 'thunderstorm';
                break;
            default:
               console.log('conditionCode:' + conditionCode);
       }
        return (
            <div className="image">
                <FontAwesomeIcon icon={icon} size="3x" />
            </div>
        );
    }
}