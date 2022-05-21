import { View, Text } from 'react-native'
import React, {useState} from 'react'
import HeaderButton from './HeaderButton'

export default function HeaderTabs() {

  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{
      flexDirection: "row",
      paddingVertical: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      
      }}>
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
