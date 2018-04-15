import { ADD_TODO, ADD_TODO_ITEM_TO_LIST } from '../../../constants/ActionTypes';

const INITIAL_STATE = {
    addTodoItemName: '',
    todoList: [],
    itemAdded: false,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, addTodoItemName: action.payload, itemAdded: false };
        case ADD_TODO_ITEM_TO_LIST:
            return {
                ...state, addTodoItemName: '', todoList: [...state.todoList, { item: action.payload, isSelected: false }],
                itemAdded: true
            }
        default: return state;
    }
}