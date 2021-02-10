import React from 'react';

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
    console.log(season);

    return (
        <div>WeatherDisplay</div>
    );
};

export default WeatherDisplay;