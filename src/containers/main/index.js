import { connect } from 'react-redux';

import App from '../../App';
import { getUser } from '../../actions/index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(getUser());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;