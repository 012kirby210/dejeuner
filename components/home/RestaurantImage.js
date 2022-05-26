import { View, Text, Image } from 'react-native'
import React from 'react'
import LikeIconComponent from './LikeIconComponent';

export default function RestaurantImage(props) {
    const {imageSource} = props;

    let {style} = props;
    style = {width: "100%", height: 200, ...style};

  return (
    <>
    <Image style={style} source={imageSource} />
    <LikeIconComponent />
    </>
  )
}