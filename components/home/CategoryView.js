import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CategoryView({value}) {
  return (
    <View style={{ alignItems: "center", marginRight: 30}}>
        <Image source={value.image}
        style={{
          width: 50,
          height: 40,
          resizeMode: "contain"
        }}/>
        <Text style={{
          fontSize: 13,
          fontWeight: "900"
        }}
        >
          {value.text}
        </Text>
       </View>
  )
}