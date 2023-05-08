import Api from '../../../services/Api';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});

export const getPokemonsData = () => {
    return async dispatch => {
        dispatch(fetchDataRequest())
        try {
            const response = await Api.getPokemons()
            dispatch(fetchDataSuccess(response))
        } catch (error) {
            dispatch(fetchDataFailure(error));
        }
    }
}