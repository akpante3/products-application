import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Profile from './component';
import Routes from './routes'
// import history from '../helpers/history'
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  // componentDidMount() {
  //   const self = this;
  //   window.onresize = () => {
  //     const cnv = document.getElementById('aliens-go-home-canvas');
  //     cnv.style.width = `${window.innerWidth}px`;
  //     cnv.style.height = `${window.innerHeight}px`;
  //   };
  //   window.onresize();
  //   setInterval(() => {
  //     self.props.moveObjects(self.canvasMousePosition);
  //   }, 10);
  // }

  // trackMouse(event) {
  //   this.canvasMousePosition = getCanvasPosition(event);
  // }

  render() {
    return (
      <Router>
             <Routes />
      </Router>
    );
  }
}

// App.propTypes = {
//   angle: PropTypes.number.isRequired,
//   gameState: PropTypes.shape({
//     started: PropTypes.bool.isRequired,
//     kills: PropTypes.number.isRequired,
//     lives: PropTypes.number.isRequired,
//   }).isRequired,
//   flyingObjects: PropTypes.arrayOf(PropTypes.shape({
//     position: PropTypes.shape({
//       x: PropTypes.number.isRequired,
//       y: PropTypes.number.isRequired
//     }).isRequired,
//     id: PropTypes.number.isRequired,
//   })).isRequired,
//   moveObjects: PropTypes.func.isRequired,
//   startGame: PropTypes.func.isRequired,
// };

export default App;