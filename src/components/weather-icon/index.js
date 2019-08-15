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
                icon = 'cloud';
                break;
            case 1009:
                icon = 'cloud';
                break;
            case 1030:
                icon = 'fog';
                break;
            case 1063:
                if (day === 1) {
                    icon = 'cloud-sun-rain';
                } else {
                    icon = 'cloud-moon-rain';
                }
                break;
            case 1066:
                icon = 'cloud-snow'
                break;
            case 1069:
                icon = 'cloud-sleet';
                break;
            case 1072:
                icon = 'cloud-sleet';
                break;
            case 1087:
                if (day === 1) {
                    icon = 'thunderstorm-sun';
                } else {
                    icon = 'thunderstorm-moon';
                }
                break;
            case 1114:
                icon = 'snow-blowing';
                break;
            case 1117:
                icon = 'snow-blowing';
                break;
            case 1135:
                icon = 'fog';
                break;
            case 1147:
                icon = 'fog';
                break;
            case 1150:
                icon = 'cloud-drizzle';
                break;
            case 1153:
                icon = 'cloud-drizzle';
                break;
            case 1168:
                icon = 'cloud-sleet';
                break;
            case 1171:
                icon = 'cloud-sleet';
                break;
            case 1180:
                if (day === 1) {
                    icon = 'cloud-sun-rain';
                } else {
                    icon = 'cloud-moon-rain';
                }
                break;
            case 1183:
                icon = 'cloud-drizzle';
                break;
            case 1186:
                if (day === 1) {
                    icon = 'cloud-sun-rain';
                } else {
                    icon = 'cloud-moon-rain';
                }
                break;
            case 1189:
                icon = 'cloud-showers';
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