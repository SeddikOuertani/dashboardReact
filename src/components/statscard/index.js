import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css'

const StatsCard = (props) => {
    return ( 
        <div className='stats-card-wrapper'>
            <div className='stats-card-icon-wrapper' style={{backgroundColor : props.IconColor}}>
                <FontAwesomeIcon className='stats-card-icon' icon={props.Icon}/>
            </div>
            <div className='stats-card-content'>
                <div className='stats-card-header'>{props.Title}</div>
                <div className='stats-card-count'>{props.Count}</div>
            </div>
        </div>
     );
}
 
export default StatsCard;