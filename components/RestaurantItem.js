import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';


export default function RestaurantItem(props) {
    const {restaurant} = props;
  return (
    <TouchableOpacity activeOpacity={1} style={{
      marginVertical: 5,
      padding:15,
      backgroundColor: 'white'
    }}>
      <RestaurantImage imageSource={restaurant.image} />
      <RestaurantInfo style={{
        backgroundColor: "white"
      }} 
      restaurantName = {restaurant.name}
      waitingTime = {restaurant.waiting}
      rating = {restaurant.rating} />
      
    </TouchableOpacity>
  )
}

