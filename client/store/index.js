import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import user from './user';
import allCharacters from './allCharacters';
import singleCharacter from './singleCharacter';
import cart from './cart';
import reviews from './reviews';
import guestCart from './guestCart';
import allCategories from './allCategories';
import singleCategory from './singleCategory';

const reducer = combineReducers({user, allCharacters, singleCharacter, cart,  reviews, guestCart});

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './allCharacters';
export * from './singleCharacter';
export * from './cart';
export * from './reviews';

export * from './guestCart';
export * from './allCategories';
export * from './singleCategory';
