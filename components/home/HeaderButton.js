import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderButton({
  text,
  textColor,
  buttonColor,
  activeTab,
  setActiveTab}) {

    const isActive = activeTab === text;
    textColor = isActive ? "white" : "black";
    buttonColor = isActive ? "black" : "white";

    const styles = StyleSheet.create({
      touchableOpacityStyle: {
        backgroundColor: buttonColor,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginHorizontal: 10,
      },
      textViewStyle: {
        color: textColor,
        fontWeight: "bold",
        fontSize: 15
      }
    });

    const onPress = () => setActiveTab(text);

    return (
      
          <TouchableOpacity style={styles.touchableOpacityStyle}
          onPress={onPress}>
              <Text style={styles.textViewStyle}>{text}</Text>
          </TouchableOpacity>
      
    )
}