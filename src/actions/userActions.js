import { REGISTER_USER, LOGIN_USER } from './types';

export const registerUser = (newUser) => {
  return {
    type: REGISTER_USER,
    newUser
  };
};

export const loginUser = (userName, pass, userLoginStatus) => {
  console.log('logging in a user');
  return {
    type: LOGIN_USER,
    userName,
    pass,
    userLoginStatus
  };
};
