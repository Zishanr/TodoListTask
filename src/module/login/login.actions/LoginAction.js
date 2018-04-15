/* Created By Zishan Rashid */

import { USER_NAME } from '../../../constants/ActionTypes';

export const userNameChangeActionCreator = (name) => {
    return ({
        type: USER_NAME,
        payload: name
    });
}