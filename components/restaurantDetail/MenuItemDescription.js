import { View, Text } from 'react-native'
import React from 'react'

export default function MenuItemDescription(props) {
    const { description } = props;
    let { textStyle, viewStyle } = props;

    viewStyle = {
        ...viewStyle,
    }

    textStyle = {
        fontSize: 16,
        fontWeight: "400",
        ...textStyle
    }

    return (
        <Text style={textStyle}>{description}</Text>
    )
}