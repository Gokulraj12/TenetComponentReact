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
    //initiating state JS object and this is the only time we do direct assignment to this state ,in all other cases we use setState
    this.state = { lat: null }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => { console.log(err); }
    );

  }
  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));




