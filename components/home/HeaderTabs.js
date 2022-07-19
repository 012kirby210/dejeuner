import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import HeaderButton from './HeaderButton'

export default function HeaderTabs(props) {

  const { activeTab, setActiveTab } = props;

  const styles = StyleSheet.create({
    viewTextStyle: {
      flexDirection: "row",
      paddingVertical: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: 'white',
    }
  });

  return (
    <View style={styles.viewTextStyle}>
      <HeaderButton 
        text="Delivery" 
        buttonColor="black" 
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        ></HeaderButton>
      <HeaderButton 
        text="Pickup"
        buttonColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}></HeaderButton>
    </View>
  )
}
