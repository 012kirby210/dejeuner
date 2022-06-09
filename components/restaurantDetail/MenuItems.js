import { View, Text,ScrollView } from 'react-native'
import MenuItem from './MenuItem';
import React from 'react'


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


export default function MenuItems() {
  return (
    <ScrollView style={{height:'70%'}}>
      {items.map( (item, index) => (
          <View key={index}>
              <MenuItem title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}/>
          </View>
      ))}
    </ScrollView>
  )
}