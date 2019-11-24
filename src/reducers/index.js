import { combineReducers } from 'redux';
import registeredUsers from './registeredUsers';

const rootReducer = combineReducers({
  registeredUsers
});

export default rootReducer;
