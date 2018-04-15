/* Created By Zishan Rashid */

import { StyleSheet } from 'react-native';

const GLOBAL_COLORS = require('../../../constants/Colors');

export default TodoListItemStyle = StyleSheet.create({
    parentContainerView: {
        paddingLeft: 20,
        marginTop: 10
    },
    itemView: {
        flexDirection: 'row',
        height: 40
    },
    checkBox: {
        height: 30,
        width: 30
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10
    },
    divider: {
        borderBottomWidth: 2,
        borderBottomColor: GLOBAL_COLORS.LIGHT_GRAY,
    },
})