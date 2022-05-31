import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RestaurantImage( props ) {

    let { imageSource, style } = props;

    style = { 
        width: "100%",
        height: 200,
        ...style,
    }

    const thereIsAnImage = undefined !== imageSource && 
    "string" === typeof imageSource &&
    0 !== imageSource.length;

    imageSource = thereIsAnImage ? { uri: imageSource } : require('../../assets/images/no_image_found.jpg');

    console.log(imageSource);

    return (
        <Image style={style} source={imageSource}/>
    );
}