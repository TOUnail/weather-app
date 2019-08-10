import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { condition, day } = this.props;
        
        let icon = null;
        
       switch (condition) {
            case 'Sunny':
                icon = 'sun'
                break;
            case 'Clear':
                icon = 'moon'
                break;
            case 'Partly cloudy':
                if (day === 1) {
                    icon = 'cloud-sun';
                } else {
                    icon = 'cloud-moon';
                }
                break;
            case 'Mist':
                icon = 'fog'
                break;
           default:
               console.log('error');
       }
        return (
            <div className="image">
                <FontAwesomeIcon icon={icon} size="3x" />
            </div>
        );
    }
}