import {SET_USER_IP} from '../constants/actions';

const initialState = {
    userIp: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_IP:
            return { ...state, userIp: action.payload }
        default:
            return state
    }
}