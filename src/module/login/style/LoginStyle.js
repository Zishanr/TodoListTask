/* Created By Zishan Rashid */

import { StyleSheet, Dimensions } from 'react-native';

const GLOBAL_COLORS = require('../../../constants/Colors');
var { width, height } = Dimensions.get('window');

export default LoginStyle = StyleSheet.create({

    loginParentConatiner: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    loginLogoText: {
        fontSize: 40,
        color: GLOBAL_COLORS.RED,
        marginTop: 60,
    },
    loginTextInput: {
        marginTop: 170,
        fontSize: 18,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    divider: {
        borderBottomWidth: 2,
        borderBottomColor: GLOBAL_COLORS.LIGHT_GRAY,
        width: width,
        marginTop: 5,
    },
    loginButton: {
        height: 45,
        width: 45,
        marginTop: 20
    },
})