/* Created By Zishan Rashid */

import { StyleSheet, Dimensions } from 'react-native';

const GLOBAL_COLORS = require('../../../constants/Colors');

export default TodoListStyle = StyleSheet.create({
    todoListParentContainer: {
        flex: 1
    },
    filterBox: {
        width: 150,
        alignSelf: 'flex-end',
        marginTop: 10
    },
    filterText: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 3
    },
    headerView: {
        height: 40,
        backgroundColor: GLOBAL_COLORS.LIGHT_GRAY,
        justifyContent: 'center',
        marginTop: 10
    },
    headerText: {
        fontSize: 15,
        paddingLeft: 15
    },
    fullFlex:{
        flex:1
    },
})