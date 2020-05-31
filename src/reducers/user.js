import {SIGN_IN} from '../constants/actions';

const initialState = {
    isAuth: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isAuth: action.payload }
        default:
            return state
    }
}
