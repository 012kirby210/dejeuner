import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

export default function RestaurantItem(props) {
    const {restaurant, navigation} = props;
    const noImageFoundPicture = require('../../assets/images/no_image_found.jpg');
    const thereIsAnImage = (typeof restaurant.image_url === 'string' 
    && restaurant.image_url.length !== 0 )
    const imageSource = thereIsAnImage ? {uri: restaurant.image_url} : noImageFoundPicture;
  return (
    <TouchableOpacity activeOpacity={1} style={{
      marginVertical: 5,
      padding:15,
      backgroundColor: 'white'
    }}
    onPress={ () => navigation.navigate('RestaurantDetail', {
      name: restaurant.name,
      image: restaurant.image_url,
      price: restaurant.price,
      rating: restaurant.rating,
      reviews: restaurant.review_count,
      categories: restaurant.categories
    })}>
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
