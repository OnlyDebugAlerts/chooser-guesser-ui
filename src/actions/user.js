import axios from 'axios';
import {SIGN_IN, SIGN_UP} from '../constants/actions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const signUp = formData => async dispatch => {
  const {data} = await axios.post('auth/registration', formData);
  dispatch({type: SIGN_UP, payload: data})
};

export const signIn = (formData, history) => async dispatch => {
  const {data} = await axios.post('auth/login', formData);
  console.log(data)
  if (!data.access_token) return;
  localStorage.setItem('jwt', data.access_token);
  history.push('/navigation');

  dispatch({type: SIGN_IN, payload: data})
};
