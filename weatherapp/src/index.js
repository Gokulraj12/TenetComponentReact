import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import WeatherDisplay from './WeatherDisplay';

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
  // constructor(props) {
  //   super(props);
  //   //initiating state JS object and this is the only time we do direct assignment to this state ,in all other cases we use setState
  //   this.state = { lat: null, errorMessage: "" }
  // }

  //Refactoring of state(alternate state initialisation)
  state = { lat: null, errorMessage: "" }

  // window.navigator.geolocation.getCurrentPosition(
  //   position => {
  //     this.setState({ lat: position.coords.latitude });
  //   },
  //   err => {
  //     //console.log(err);
  //     this.setState({ errorMessage: err.message })
  //   }
  // );

  //Rendercontent() will contain the conditional stmts which can be rendered using render method
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <WeatherDisplay lat={this.state.lat} />
    }
    else if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    else {
      return <Spinner />
    }
  }

  render() {
    //conditional rendering using if - we need to avoid conditional rendering inside render method
    // if (this.state.lat && !this.state.errorMessage) {
    //   return <WeatherDisplay lat={this.state.lat} />
    // }
    // else if (!this.state.lat && this.state.errorMessage) {
    //   return <div>Error: {this.state.errorMessage}</div>
    // }
    // else {
    //   return <Spinner />
    // }
    return (
      <div>{this.renderContent()}</div>
    );
  }
  //Lifecycle methods Refactoring
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => { this.setState({ lat: position.coords.latitude }) },
      err => { this.setState({ errorMessage: err.message }) }
    );
  }
  // componentDidUpdate() {
  //   //console.log("The screen is rerendered with update");
  // }
}


ReactDOM.render(<App />, document.querySelector('#root'));




