import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';

export default function RestaurantDetail( { route }) {

  const styles = StyleSheet.create({
    styleView:{
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%'
    },
    styleDivider: {
      width: '100%',
      margin: 5,
    }
  });

   return (
    <View style={styles.styleView}>
      <About route={route}/>
      <Divider style={styles.styleDivider}/>
      <MenuItems />
    </View>
  )
}