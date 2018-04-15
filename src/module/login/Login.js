/* Created By Zishan Rashid */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { userNameChangeActionCreator } from './login.actions/index';
import { NavigationActions } from 'react-navigation';
import LoginStyle from './style/LoginStyle';


const GLOBAL_STRING = require('../../constants/String');
const GLOBAL_COLORS = require('../../constants/Colors');

class Login extends Component {

    render() {
        return (
            <View style={LoginStyle.loginParentConatiner}>

                <Text style={LoginStyle.loginLogoText}>
                    {GLOBAL_STRING.TODO}
                </Text>

                <TextInput
                    style={LoginStyle.loginTextInput}
                    placeholder={GLOBAL_STRING.YOUR_NAME}
                    placeholderTextColor={GLOBAL_COLORS.RED}
                    onChangeText={this._onNameChanged.bind(this)}
                    value={this.props.userName}
                    autoCorrect={false}
                    autoCapitalize='none'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType={'name-phone-pad'} />

                <View
                    style={LoginStyle.divider} />

                <TouchableOpacity
                    onPress={this._loginUser}>
                    <Image source={require('../../../assets/login.png')}
                        style={LoginStyle.loginButton} />
                </TouchableOpacity>

            </View>
        );
    }

    _onNameChanged(name) {
        this.props.userNameChangeActionCreator(name);
    }

    _loginUser = () => {
        if (this.props.userName) {
            this.props.navigation.dispatch(NavigationActions.reset(
                {
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'todoTabNavigator',
                        })
                    ]
                }));
        }
    }

}

const _mapStateToProps = ({ loginReducer }) => {
    const { userName } = loginReducer;
    return { userName };
}

export default connect(_mapStateToProps, { userNameChangeActionCreator })(Login);