import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import CategoryView from './CategoryView';

export default function Categories() {

  const items = [
    {
      image: require( "../assets/images/shopping-bag.png"),
      text: "Pick-up"
    },
    {
      image: require( "../assets/images/soft-drink.png"),
      text: "Soft drink"
    },
    {
      image: require( "../assets/images/bread.png"),
      text: "Bread"
    },
    {
      image: require( "../assets/images/coffee.png"),
      text: "Coffee"
    },
    {
      image: require( "../assets/images/desserts.png"),
      text: "Desserts"
    },
    {
      image: require( "../assets/images/deals.png"),
      text: "Deals"
    }
  ];

  return (
    <View style={{
      marginTop: 5,
      backgroundcolor: "white",
      paddingVertical: 10,
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {items.map( (value) => {
          return (
            <CategoryView value={value}/>
          );
        })}
      </ScrollView>
    </View>
  )
}