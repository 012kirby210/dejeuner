import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

export default function RestaurantItem(props) {
    const {restaurant} = props;
    const noImageFoundPicture = require('../../assets/images/no_image_found.jpg');
    const thereIsAnImage = (typeof restaurant.image_url === 'string' 
    && restaurant.image_url.length !== 0 )
    const imageSource = thereIsAnImage ? {uri: restaurant.image_url} : noImageFoundPicture;
  return (
    <TouchableOpacity activeOpacity={1} style={{
      marginVertical: 5,
      padding:15,
      backgroundColor: 'white'
    }}>
      <RestaurantImage imageSource={imageSource} />
      <RestaurantInfo style={{
        backgroundColor: "white"
      }} 
      restaurantName = {restaurant.name}
      waitingTime = {restaurant.waiting}
      rating = {restaurant.rating} />
      
    </TouchableOpacity>
  )
}
