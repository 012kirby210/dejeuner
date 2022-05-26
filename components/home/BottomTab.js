import { View, Text } from 'react-native'
import { Image, TouchableOpacity } from 'react-native';
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTab(props) {

    const { itemText, itemIcon } =  props;
    const thereIsAnImage = ("string" === typeof itemIcon);
    
    const { activeTab, setActiveTab } = props;


    const color= activeTab===itemText ? "black" : "grey";

    return (
        <TouchableOpacity 
            onPress={ () => { setActiveTab(itemText)}}

            style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            { thereIsAnImage ? (<FontAwesome5 name={itemIcon} size={25} color={color}/>) : null}
            <Text style={{ color: color}}>{itemText}</Text>
        </TouchableOpacity>
    )
}