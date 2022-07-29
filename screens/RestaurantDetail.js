import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';


export default function RestaurantDetail( { route, navigation }) {

  const restaurantName = ('name' in route.params) ? route.params.name : 'no named restaurant';

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

  const items = [
    {
        title: "Plat 1",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://www.journaldugeek.com/content/uploads/2021/05/rick-et-morty-adult-swim.jpg"
    },
    {
        title: "Plat 2",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://i.redd.it/gqkvytjh5tfz.png"
    },
    {
        title: "Plat 3",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://www.realite-virtuelle.com/wp-content/uploads/2019/12/rick-morty-toilettes-vr-768x436.jpg"
    },
    {
        title: "Plat 4",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/187/7szw3al4h2kr9elvenpclmzguvm-048.jpg"
    },
    {
        title: "Plat 5",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/187/7szw3al4h2kr9elvenpclmzguvm-048.jpg"
    },
    {
        title: "Plat 6",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/187/7szw3al4h2kr9elvenpclmzguvm-048.jpg"
    },
    {
        title: "Plat 7",
        description: "Je suis la description du plat 1",
        price: "$13.50",
        image: "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/187/7szw3al4h2kr9elvenpclmzguvm-048.jpg"
    }
  ];

   return (
    <View style={styles.styleView}>
      <About route={route}/>
      <Divider style={styles.styleDivider}/>
      <MenuItems route={route} restaurantName={restaurantName} gotCheckboxes={true} foods={items}/>
      <ViewCart route={ route } navigation={ navigation }/>
    </View>
  )
}