import { View, Text } from 'react-native'
import React from 'react'
import RestaurantItem from './RestaurantItem'

export default function Restaurants(props) {

    const {restaurants, navigation} = props;

  return (
   <View>
       {restaurants.map( (item,index) => {
           return (
             <RestaurantItem key={index} restaurant={item} navigation={navigation} />
           );
       })}
   </View>
  )
}