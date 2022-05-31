import { View, Text } from 'react-native'
import React from 'react'

export default function RestaurantTitle(props) {

    let { style } = props;
    const { title } = props;

    style = {
        fontSize: 28,
        fontWeight: "600",
        marginHorizontal: 15,
        marginTop: 10,
        ...style
    }

    return (
        <View style={style}>
            <Text>{title}</Text>
        </View>
    )
}