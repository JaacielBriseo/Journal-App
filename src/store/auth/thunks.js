import {
  signInWithGoogle,
  registerUserWithEmail,
  loginWithEmail,
  logoutFirebase,
} from '../../firebase/provider';
import { clearNotesLogout } from '../journal/journalSlice';
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
    const {ok,uid,photoURL,errorMessage} = await registerUserWithEmail({ email, password, displayName });

    if(!ok) return dispatch(logout({errorMessage}))
    dispatch(login({uid,displayName,email,photoURL}))
    
  };
};

export const startLoginWithEmail = ({email,password}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await loginWithEmail({email,password})
    console.log(result);

    if(!result.ok) return dispatch(logout(result))
    dispatch(login(result))

  }

}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(clearNotesLogout())
    dispatch(logout({}))
  }
}