import comments from '../store/comments';
import categories from '../store/categories';

 const initialState = {
    points: 20,
    comments,
    categories,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'game':
            return { ...state, userIp: action.payload }
        default:
            return state
    }
}