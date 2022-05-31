import { View, Text } from 'react-native'
import React from 'react'

export default function (props) {

    const { informations} = props;
    let { style } = props;

    style = {
        marginTop: 1,
        marginHorizontal: 15,
        fontSize: 14,
        fontWeight: "300",
        ...style
    };

    return (
        <View style={style}>
            <Text>
                {informations}
            </Text>
        </View>
    )
}