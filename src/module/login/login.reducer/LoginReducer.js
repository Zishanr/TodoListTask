import { USER_NAME } from '../../../constants/ActionTypes';

const INTIAL_STATE = {
    userName: '',
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case USER_NAME:
            return { ...state, userName: action.payload };
        default: 
        return state;
    }
}