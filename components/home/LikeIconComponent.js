import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function LikeIconComponent() {

    const [ liked, setLiked ] = useState(false);

    const onPress = () => {setLiked(!liked)};

    const iconName = liked ? "heart" : "heart-outline";
    const styles = StyleSheet.create({
        TouchableOpacityStyle: {
            position: "absolute",
            right: 20,
            top: 20
        },
    });

    return (
        <TouchableOpacity style={styles.TouchableOpacityStyle} 
        onPress={onPress}>
            <MaterialCommunityIcons name={iconName} size={24} color="red"/>
        </TouchableOpacity>
    )
}