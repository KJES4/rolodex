import { createStore } from 'redux';

import rootReducer from './reducers';

import registeredUsers from './data/registeredUsers';

const initialState = {
  registeredUsers
};

const store = createStore(rootReducer, initialState);

export default store;
