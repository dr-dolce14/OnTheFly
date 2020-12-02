import React from 'react';

const getSeason = (lat, month ) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {
    // console.log(props.lat)
    const season = getSeason(props.lat, new Date().getMonth());
    const icon = season === "Winter" ? 'snowflake' : 'sun';

    // console.log(season);


return (
    <div>
        <i className={`${icon} icon`} />
        <h1>{season === 'Winter' ? "Burr, it is chilly!" : "Let's hit the beach!"}</h1>
        <i className={`${icon} icon`} />
    </div>
)
}

export default SeasonDisplay;