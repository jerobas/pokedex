import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/pokemons_actions';
import { SET_FILTER, CLEAN_FILTER } from '../actions/search_bar_actions';
import { SET_FILTER_TYPE, CLEAN_FILTER_TYPE } from '../actions/filter_actions';

const initialState = {
  data: [],
  originalData: [],
  isLoading: false,
  error: null,
  pokemon_types: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      let aux_types = []
      action.payload.map((data) => {
        data.types.map((dt) => {
          if (!aux_types.includes(dt.type.name))
            aux_types.push(dt.type.name)
        })
      })
      return {
        ...state,
        data: action.payload,
        originalData: action.payload,
        isLoading: false,
        error: null,
        pokemon_types: aux_types
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_FILTER:
      let aux = state.originalData
      return {
        ...state,
        data: aux.filter(pokemon => pokemon.name.includes(action.payload)),
      }
    case CLEAN_FILTER:
      return {
        ...state,
        data: state.originalData
      }
    case SET_FILTER_TYPE:
      let aux2 = state.originalData
      let filter = []
      aux2.map((data) => {
        if (data.types[0].type.name === action.payload) {
          filter.push(data)
        }
        if (data.types[1] && data.types[1].type.name === action.payload) {
          filter.push(data)
        }
      })
      return {
        ...state,
        data: filter
      }
    case CLEAN_FILTER_TYPE:
      return {
        ...state,
        data: state.originalData
      }
    default:
      return state;
  }
};

export default reducer;
