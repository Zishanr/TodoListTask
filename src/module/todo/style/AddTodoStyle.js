/* Created By Zishan Rashid */

import { StyleSheet, Dimensions } from 'react-native';

const GLOBAL_COLORS = require('../../../constants/Colors');
let { width, height } = Dimensions.get('window');

export default AddTodoStyle = StyleSheet.create({
    parentContainerView: {
        flex: 1
    },
    textInput: {
        marginTop: 70,
        fontSize: 18,
        alignSelf: 'stretch',
        paddingBottom: 0,
        paddingLeft: 15
    },
    divider: {
        borderBottomWidth: 2,
        borderBottomColor: GLOBAL_COLORS.LIGHT_GRAY,
        width: width,
    },
    buttonContainerView: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        backgroundColor: '#2B98F0',
        marginTop: 20
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
    },
})