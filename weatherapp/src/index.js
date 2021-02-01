import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => { console.log(position); },
    err => { console.log(err); }
  );
  return (
    <div>
      <WeatherDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));




