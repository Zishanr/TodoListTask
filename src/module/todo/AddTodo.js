/* Created By Zishan Rashid */

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { AppHeader } from '../common/index';
import { connect } from 'react-redux';
import { addTodoItemActionCreator, addTodoItemToListActionCreator } from './Todo.actions/index'
import AddTodoStyle from './style/AddTodoStyle';

const GLOBAL_STRING = require('../../constants/String');
const GLOBAL_COLORS = require('../../constants/Colors');


class AddTodo extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.itemAdded) {
            Alert.alert(
                'Todo',
                'Todo Item Added Succesfully',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true }
            )
        }
    }


    render() {
        return (
            <View style={AddTodoStyle.parentContainerView}>

                <AppHeader
                    headerText='Add Todo' />

                <TextInput
                    style={AddTodoStyle.textInput}
                    placeholder={GLOBAL_STRING.ENTER_YOUR_ITEM}
                    placeholderTextColor='black'
                    onChangeText={this._onItemChange.bind(this)}
                    value={this.props.addTodoItemName}
                    autoCorrect={false}
                    autoCapitalize='none'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType={'name-phone-pad'}
                    ref={addTodoComponentRef => this._addTodoComponentRef = addTodoComponentRef} />

                <View
                    style={AddTodoStyle.divider} />

                <View style={AddTodoStyle.buttonContainerView}>

                    <TouchableOpacity
                        style={AddTodoStyle.button}
                        onPress={this._addItemTodoList}>

                        <Text style={AddTodoStyle.buttonText}>+ Add Todo</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    _onItemChange(addiTodoItemName) {
        this.props.addTodoItemActionCreator(addiTodoItemName);
    }

    _addItemTodoList = () => {
        if (this.props.addTodoItemName)
            this.props.addTodoItemToListActionCreator(this.props.addTodoItemName);
    }
}

const _mapStateToProps = ({ addTodoItemReducer, }) => {
    const { addTodoItemName, todoList, itemAdded } = addTodoItemReducer;
    return { addTodoItemName, todoList, itemAdded, };
}

export default connect(_mapStateToProps, { addTodoItemActionCreator, addTodoItemToListActionCreator })(AddTodo);