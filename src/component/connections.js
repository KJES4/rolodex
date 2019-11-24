import { bindActionCreators } from 'Redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import Register from './register';

function mapStateToProps(state) {
  return {
    registeredUsers: state.registeredUsers
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

const Connections = connect(mapStateToProps, mapDispachToProps)(Register);

export default Connections;
