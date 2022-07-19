import { View, Text, StyleSheet } from 'react-native'
import { Image, TouchableOpacity } from 'react-native';
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTab(props) {

    const { itemText, itemIcon } =  props;
    const thereIsAnImage = ("string" === typeof itemIcon);
    
    const { activeTab, setActiveTab } = props;


    const color= activeTab===itemText ? "black" : "grey";

    const styles = StyleSheet.create({
        touchableOpacityViewStyle:{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        textViewStyle: {
             color: color,
        }
    });

    const onPress = () => { setActiveTab(itemText); };

    const iconImage = thereIsAnImage ? (<FontAwesome5 name={itemIcon} size={25} color={color}/>) : null;

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={ styles.touchableOpacityViewStyle}>
            { iconImage }
            <Text style={ styles.textViewStyle }>{itemText}</Text>
        </TouchableOpacity>
    )
}