/* Created By Zishan Rashid */

import { combineReducers } from 'redux';
import LoginReducer from '../module/login/login.reducer/LoginReducer';
import AddTodoReducer from '../module/todo/TodoReducer/AddTodoReducer';

const rootReducer = combineReducers({
    loginReducer: LoginReducer,
    addTodoItemReducer: AddTodoReducer,
});

export default rootReducer;