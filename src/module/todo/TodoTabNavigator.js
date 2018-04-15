import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const GLOBAL_COLORS = require('../../constants/Colors');

const TodoTabNavigator = TabNavigator(
    {
        List: {
            screen: TodoList,
        },
        Add: {
            screen: AddTodo,
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: false,
            showLabel: true,
            activeTintColor: 'black',
            inactiveTintColor: '#888888',
            labelStyle: {
                fontSize: 14,
                marginBottom: 15,
            },
            style: {
                backgroundColor: GLOBAL_COLORS.LIGHT_GRAY,
            },
        }
    }
);

export default TodoTabNavigator;