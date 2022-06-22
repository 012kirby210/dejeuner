import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import RestaurantImage from './RestaurantImage';
import RestaurantInformations from './RestaurantInformations';
import RestaurantName from './RestaurantName';

export default function About( {route} ) {

    const yelpRestaurantInfo = {
      name: 'The name of the restaurant',
      image: "https://images6.alphacoders.com/909/909641.png",
      price: '$$',
      reviews: '1500',
      rating: '4.5',
      categories: [{title: 'category1'}, {title: 'category2'}],
    };

    //const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;
    const { name, image, price, reviews, rating, categories } = route.params;

    const formattedCategories = categories.map((category) => category.title).join(' • ');
    


    const description = `${formattedCategories} ${price? " • " + price : ""} 🎟️ ${rating? " • " + rating : ""} ⭐ (${reviews})`;
    const styles = StyleSheet.create(
      {
        viewStyle: {
          width: '100%',
        }
      }
    );

    const imageUri = "https://images6.alphacoders.com/909/909641.png";
    const title = "I'm the title";
    const informations = "Some - Description - $$ - 🎫 - 4 ⭐ (2913+)"  ;

  return (
    <View style={styles.viewStyle}>
      <RestaurantImage imageSource={image} />
      <RestaurantName name={name} />
      <RestaurantInformations description={description} />
    </View>
  )
}