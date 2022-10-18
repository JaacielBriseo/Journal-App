import {
  signInWithGoogle,
  registerUserWithEmail,
} from '../../firebase/provider';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    // console.log({result})
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmail = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await registerUserWithEmail({ email, password, displayName });
    console.log(resp);
  };
};