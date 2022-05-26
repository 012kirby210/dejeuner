import { View, Text } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-web';

export default function RestaurantInfo(props){
    const { restaurantName, waitingTime, rating } = props;
    let { style } = props;

    style = { 
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 10,
        ...style, 
    };

    return (
    <View style={style}>
        <View>
        <Text style={{
            fontSize: 15, fontWeight: "700"
        }}>
            {restaurantName}</Text>
        <Text style={{
            fontSize: 13, color: "#999999"
        }}>
            {waitingTime}
        </Text>
        </View>
            <View style={{
                height: 30, 
                width: 30,
                borderRadius: 50,
                backgroundColor: "#888888",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text style={{
                fontSize: 14,
                fontWeight: "900",
                color: "white"
            }}>{rating}</Text>
        </View>
    </View>
    );
}