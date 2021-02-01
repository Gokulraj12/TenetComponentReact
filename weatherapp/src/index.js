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
    this.state = { lat: null, errorMessage: "" }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        //console.log(err);
        this.setState({ errorMessage: err.message })
      }
    );

  }
  render() {
    //conditional rendering using if
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat} </div>
    }
    else if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    else {
      return <div>Loading........</div>
    }
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));




