import React from 'react';
import ReactDOM from 'react-dom';

//import WeatherDisplay from './WeatherDisplay';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => { console.log(position); },
//     err => { console.log(err); }
//   );
//   return (
//     <div>
//       Latitude:
//       <WeatherDisplay />
//     </div>
//   );
// };

//Class component refactoring
class App extends React.Component {
  constructor(props) {
    super(props);
    //initiating state JS object
    this.state = { lat: null }
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => { console.log(position); },
      err => { console.log(err); }
    );
    return <div>Latitude: </div>
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));




