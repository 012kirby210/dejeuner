import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoryView({value}) {

  const styles = StyleSheet.create({
    viewStyle: {
      alignItems: "center",
      marginRight: 30
    },
    imageStyle: {
      width: 50,
      height: 40,
      resizeMode: "contain"
    },
    textViewStyle: {
      fontSize: 13,
      fontWeight: "900"
    }
  });

  return (
    <View style={styles.viewStyle}>
        <Image source={value.image}
        style={styles.imageStyle}/>
        <Text style={styles.textViewStyle}>
          {value.text}
        </Text>
       </View>
  )
}