import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function ViewCart() {
  return (
    <View style={{
        flex:1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        zIndex: 100
    }}>
        <View style={{flexDirection: "row",
        justifyContent: "center",
        width: "100%"}}>
        <TouchableOpacity style={{marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 30,
        width: 300,
        position: "relative"
        }}>
        <Text style={{
            color: "white",
            fontSize: 16,
        }}>View Cart</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}