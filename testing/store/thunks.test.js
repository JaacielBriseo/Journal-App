import {
  loginWithEmail,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from '../../src/firebase/provider';
import {
  checkingCredentials,
  login,
  logout,
} from '../../src/store/auth/authSlice';
import {
  checkingAuth,
  startCreatingUserWithEmail,
  startGoogleSignIn,
  startLoginWithEmail,
  startLogout,
} from '../../src/store/auth/thunks';
import { clearNotesLogout } from '../../src/store/journal/journalSlice';
import { demoUser } from '../fixtures/authFixtures';
jest.mock('../../src/firebase/provider');
describe('Pruebas en authThunks', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('checkingAuth debe de invocar el checkingCredentials', async () => {
    await checkingAuth()(dispatch);
    expect(dispatch).toBeCalledWith(checkingCredentials());
  });
  test('startGoogleSignIn debe de llamar checkingCredentials y login', async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
  test('startGoogleSignIn debe de llamar checkingCredentials y logout-Error', async () => {
    const loginData = { ok: false, errorMessage: 'Un error en Google' };
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
  test('startLoginWithEmail debe de llamar checkingCred y login-Exito', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '123456' };
    await loginWithEmail.mockResolvedValue(loginData);
    await startLoginWithEmail(formData)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
  test('startLoginWithEmail debe de llamar checkingCred y logout-Error', async () => {
    const loginData = { ok: false, errorMessage: 'Un error' };
    const formData = { email: demoUser.email, password: '123456' };
    await loginWithEmail.mockResolvedValue(loginData);
    await startLoginWithEmail(formData)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData));
  });
  test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async () => {
    await startLogout()(dispatch);
    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout({}));
  });
  test('startCreatingUserWithEmail debe de llamar checkingCred y login', async () => {
    const formData = { email:demoUser.email, password :'123456', displayName:'ABC123'};
    await registerUserWithEmail.mockResolvedValue(formData)
    await startCreatingUserWithEmail(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  });
});
