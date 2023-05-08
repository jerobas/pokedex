import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer/pokemons_reducer.js';
import searchBarReducer from './reducer/search_bar_reducer.js';
import filterReducer from './reducer/filter_reducer';

const store = configureStore({
    reducer: {
        pokemons: reducer,
        search: searchBarReducer,
        filter: filterReducer
    },
    middleware: [thunkMiddleware]
});

export default store;