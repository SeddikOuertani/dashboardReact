import React from 'react';
import StatsCard from '../statscard';
import './style.css'
import { faAddressBook, faEarDeaf, faRadio, faEarth } from '@fortawesome/free-solid-svg-icons';

const HeaderStats = (props) => {
    return ( 
        <div className="header-stats-wrapper">
            <StatsCard IconColor={"var(--primary)"} Count={23} Title={"Address books"} Icon={faAddressBook} />
            <StatsCard IconColor={"var(--secondary)"} Count={11} Title={"Ear deafs"} Icon={faEarDeaf} />
            <StatsCard IconColor={"var(--danger)"} Count={55} Title={"Radios"} Icon={faRadio} />
            <StatsCard IconColor={"green"} Count={46} Title={"Earth"} Icon={faEarth} />
        </div>
     );
}
 
export default HeaderStats;