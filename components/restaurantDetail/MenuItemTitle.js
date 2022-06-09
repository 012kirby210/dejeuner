import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MenuItemTitle(props) {
    const {title} = props;
    let { viewStyle, textStyle}  = props;

    const styles = StyleSheet.create({
        textStyle:{
            ...textStyle,
            fontSize: 24,
            fontWeight: '600',
        },
        viewStyle: {
            ...viewStyle,
            
        }
    });

    return (
        <Text style={styles.textStyle} >{title}</Text>
    )
}