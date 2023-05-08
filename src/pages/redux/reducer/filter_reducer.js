import { SET_FILTER_TYPE, CLEAN_FILTER_TYPE } from '../actions/filter_actions.js';
const initialState = {
    data: '',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_TYPE:
            return {
                ...state,
                data: action.payload
            }
        case CLEAN_FILTER_TYPE:
            return {
                ...state,
                data: ''
            }
        default:
            return state;
    }
}

export default filterReducer