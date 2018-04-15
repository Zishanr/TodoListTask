
import { ADD_TODO, ADD_TODO_ITEM_TO_LIST } from '../../../constants/ActionTypes';

export const addTodoItemActionCreator = (addTodoIteName) => {
    return ({
        type: ADD_TODO,
        payload: addTodoIteName,
    });
}

export const addTodoItemToListActionCreator = (addTodoIteName) => {
    return ({
        type: ADD_TODO_ITEM_TO_LIST,
        payload: addTodoIteName,
    });
}