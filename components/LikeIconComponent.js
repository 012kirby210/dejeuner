import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function LikeIconComponent() {

    const [ liked, setLiked ] = useState(false);

    const onPress = () => {setLiked(!liked)};

    const iconName = liked ? "heart" : "heart-outline";
    return (
        <TouchableOpacity style={{
            position: "absolute",
            right: 20,
            top: 20
        }}
        onPress={onPress}>
            <MaterialCommunityIcons name={iconName} size={24} color="red"/>
        </TouchableOpacity>
    )
}