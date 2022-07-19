import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CategoryView from './CategoryView';

export default function Categories() {

  const items = [
    {
      image: require( "../../assets/images/shopping-bag.png"),
      text: "Pick-up"
    },
    {
      image: require( "../../assets/images/soft-drink.png"),
      text: "Soft drink"
    },
    {
      image: require( "../../assets/images/bread.png"),
      text: "Bread"
    },
    {
      image: require( "../../assets/images/coffee.png"),
      text: "Coffee"
    },
    {
      image: require( "../../assets/images/desserts.png"),
      text: "Desserts"
    },
    {
      image: require( "../../assets/images/deals.png"),
      text: "Deals"
    }
  ];

  const styles = StyleSheet.create({
    viewStyle: {
      marginTop: 10,
      marginBottom: 5,
    },
    scrollViewStyle: {
      backgroundColor: "white",
            paddingVertical: 10, 
    }
  });

  return (
      <View style={styles.viewStyle}>
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewStyle} >
          {items.map( (value, index) => {
            return (
              <CategoryView key={index} value={value}/>
            );
          })}
        </ScrollView>
      </View>
  )
}