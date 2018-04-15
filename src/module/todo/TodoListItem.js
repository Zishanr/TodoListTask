/* Created By Zishan Rashid */

import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import TodoListItemStyle from './style/TodoListItemStyle'

const GLOBAL_COLORS = require('../../constants/Colors');

export default TodoListItem = ({ listItem }) => {
    return (
        <View style={TodoListItemStyle.parentContainerView}>

            <View style={TodoListItemStyle.itemView}>

                <Image style={TodoListItemStyle.checkBox}
                    source={require('../../../assets/empty_checkbox.png')} />

                <Text style={TodoListItemStyle.text}>{listItem.item}</Text>
            </View>

            <View
                style={TodoListItemStyle.divider} />

        </View>
    );
}