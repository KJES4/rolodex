import { REGISTER_USER, LOGIN_USER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log(state, action);
      return [...state, action.newUser];
    case LOGIN_USER:
      return {
        ...state,
        newUser: action.payload
      };
    default:
      return state;
  }
}
