import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

export default function MenuItemImage( props ) {

    let { imageSource, style } = props;

    const styles = StyleSheet.create({
        imageStyle: {
            borderRadius: 10,
            width: 100,
            height: 100,
            ...style,
        }
    });


    const thereIsAnImage = undefined !== imageSource && 
    "string" === typeof imageSource &&
    0 !== imageSource.length;

    imageSource = thereIsAnImage ? { uri: imageSource } : require('../../assets/images/no_image_found.jpg');

    return (
        <Image style={styles.imageStyle} source={imageSource} resizeMode="cover"/>
    );
}