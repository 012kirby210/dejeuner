import { View, Text, Image } from 'react-native'
import React from 'react'
import RestaurantImage from './RestaurantImage';
import RestaurantInformations from './RestaurantInformations';
import RestaurantTitle from './RestaurantTitle';

export default function About() {

    const imageUri = "https://images6.alphacoders.com/909/909641.png";
    const title = "I'm the title";
    const informations = "Some - Description - $$ - 🎫 - 4 ⭐ (2913+)"  ;

  return (
    <View>
      <RestaurantImage imageSource={imageUri} />
      <RestaurantTitle title={title} />
      <RestaurantInformations informations={informations} />
    </View>
  )
}