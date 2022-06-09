import { View, Text } from 'react-native'
import React from 'react'

export default function RestaurantName(props) {

    let { viewStyle, textStyle } = props;
    const { name } = props;

    viewStyle = {
        marginHorizontal: 15,
        marginTop: 10,
        ...viewStyle
    };

    textStyle = {
        fontSize: 28,
        fontWeight: "600",
        ...textStyle
    }

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{name}</Text>
        </View>
    )
}