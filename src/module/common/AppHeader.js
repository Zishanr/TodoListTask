import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const GLOBAL_COLORS = require('../../constants/Colors');

const AppHeader = ({ headerText }) => {
    return (
        <View style={{
            height: 50,
            backgroundColor: GLOBAL_COLORS.LIGHT_GRAY,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 10,
            flexDirection: 'row',
        }}>

            <Text style={{ fontSize: 18, color: 'black' }}> {headerText} </Text>

            <TouchableOpacity>
                <Image
                    style={{ height: 35, width: 35 }}
                    source={require('../../../assets/exit.png')} />
            </TouchableOpacity>

        </View>
    );
}
export { AppHeader };
