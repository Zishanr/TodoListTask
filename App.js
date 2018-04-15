/* Created By Zishan Rashid */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import Login from './src/module/login/Login';
import TodoTabNavigator from './src/module/todo/TodoTabNavigator'
import configureStore from './src/store/ConfigureStore';


const AppNavigator = StackNavigator({

    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    todoTabNavigator: {
        screen: TodoTabNavigator,
        navigationOptions: {
            header: null
        }
    },
},
    {
        headerMode: 'none',
        initialRouteName: 'login'
    });



const store = configureStore();

export default function App() {


    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <AppNavigator />
            </SafeAreaView>
        </Provider>
    );
}
