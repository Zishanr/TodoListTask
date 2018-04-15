/* Created By Zishan Rashid */

import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { AppHeader } from '../common/index';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoListStyle from './style/TodoListStyle';

const GLOBAL_STRING = require('../../constants/String');
const GLOBAL_COLORS = require('../../constants/Colors');

class TodoList extends Component {

    render() {
        return (

            <View style={TodoListStyle.todoListParentContainer}>
                <AppHeader
                    headerText={`${this.props.userName}'s Todo `}></AppHeader>

                <TouchableOpacity
                    style={TodoListStyle.filterBox}>
                    <Text style={TodoListStyle.filterText}>Filter</Text>
                </TouchableOpacity>

                <View style={TodoListStyle.fullFlex}>

                    <View style={TodoListStyle.headerView}>
                        <Text style={TodoListStyle.headerText}>Todo's</Text>
                    </View>

                    <FlatList
                        style={TodoListStyle.fullFlex}
                        data={this.props.todoList}
                        renderItem={this._renderTodoItem}
                        keyExtractor={this._keyExtractor}
                        ListFooterComponent={this._renderFooterView} />

                </View>
            </View>
        )
    }

    // FlatList KeyExtractor
    _keyExtractor = (item, index) => index.toString();


    // FlatList Item View
    _renderTodoItem = ({ item }) => {
        return (
            <TodoListItem
                listItem={item} />
        );
    }

    _renderFooterView = () => {
        if (!this.props.todoList.length) return null
        return (
            <View style={{ height: 40, backgroundColor: GLOBAL_COLORS.LIGHT_GRAY, justifyContent: 'center', }}></View>
        );
    }
}

const _mapStateToProps = ({ addTodoItemReducer, loginReducer }) => {
    const { todoList } = addTodoItemReducer;
    const { userName } = loginReducer;
    return { todoList, userName };
}

export default connect(_mapStateToProps)(TodoList);