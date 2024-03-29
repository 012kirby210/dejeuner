import { View, Text } from 'react-native'
import React from 'react'

export default function (props) {

    const { description } = props;
    let { viewStyle, textStyle } = props;

    viewStyle = {
        marginTop: 1,
        marginHorizontal: 15,
        ...viewStyle
    };

    textStyle = {
        fontSize: 14,
        fontWeight: "300",
        ...textStyle
    }

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{description}</Text>
        </View>
    )
}