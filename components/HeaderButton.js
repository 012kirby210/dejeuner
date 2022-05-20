import { View, Text, TouchableOpacity } from 'react-native'
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

    return (
      <View>
          <TouchableOpacity style={{
              backgroundColor: buttonColor,
              paddingVertical: 6,
              paddingHorizontal: 16,
              borderRadius: 30,
              marginHorizontal: 10
          }}
          onPress={() => setActiveTab(text)}>
              <Text style={{
                color: textColor,
                fontWeight: "bold",
                fontSize: 15
                }}>{text}</Text>
          </TouchableOpacity>
      </View>
    )
}