import { View, Text } from 'react-native'
import React from 'react'

export default function MenuItemPrice(props) {
    const { price } = props;
    let { textStyle, viewStyle } = props;

    viewStyle = {
        ...viewStyle,
    }

    textStyle = {
        fontSize: 18,
        fontWeight: '400',
        ...textStyle
    }

    return (
        <Text style={textStyle}>{price}</Text>
    )
}