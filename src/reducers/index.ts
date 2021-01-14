import {UsersReducer} from './Users';
import {combineReducers} from 'redux';
export const Reducers = combineReducers({
   userState: UsersReducer,
});
