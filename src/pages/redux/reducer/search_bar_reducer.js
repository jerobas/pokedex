import { SET_FILTER, CLEAN_FILTER } from '../actions/search_bar_actions'
const initialState = {
    data: '',
}

const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                data: action.payload
            }
        case CLEAN_FILTER:
            return {
                ...state,
                data: ''
            }
        default:
            return state;
    }
}

export default searchBarReducer