import { View, Text, ScrollView } from 'react-native'
import MenuItem from './MenuItem';
import React from 'react'


export default function MenuItems({restaurantName, route, foods, gotCheckboxes}) {

    return (
        <ScrollView style={{}}>
        {foods.map( (item, index) => (
            
                <MenuItem key={index} title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        restaurantName={restaurantName}
                        gotCheckboxes={gotCheckboxes}
                        />
            
        ))}
        </ScrollView>
    )
}