import axios from 'axios';
import {SET_USER_IP} from '../constants/actions';

export const setUserIp = () => async dispatch => {
  const {data} = await axios.get('https://jsonip.com');
  dispatch({type: SET_USER_IP, payload: data.ip})
};
