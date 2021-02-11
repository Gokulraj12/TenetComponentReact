import React from 'react';
import './WeatherDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr its chilly",
        iconName: "snowflake"
    }
};

const getSeason = (lat, months) => {
    if (months > 2 && months < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const WeatherDisplay = props => {

    //const date = new Date().getMonths();
    const season = getSeason(props.lat, new Date().getMonth());
    // const userDefinedText = season === 'winter' ? "Burr its chilly!" : "Let's hit the beach!";
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`weather-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default WeatherDisplay;