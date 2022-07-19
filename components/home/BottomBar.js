import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useState } from 'react';
import BottomTab from './BottomTab';

export default function BottomBar() {

    const [ activeTab, setActiveTab ] = useState('Accueil');

    const tabs = [
        {
            "itemText": "Accueil",
            "itemIcon": "home",
        },
        {
            "itemText": "Recherche",
            "itemIcon": "search",
        },
        {
            "itemText": "Panier",
            "itemIcon": "shopping-basket",
        },
        {
            "itemText": "Factures",
            "itemIcon": "receipt",
        },
        {
            "itemText": "Compte",
            "itemIcon": "user",
        },
    ];

    const styles = StyleSheet.create({
            viewStyle: {
            flexDirection: "row",  
            marginHorizontal: 30,
            margin: 10,
            justifyContent: "space-between",
        }
    });
    return ( 
        <View style={styles.viewStyle}>
        { tabs.map((item,index) => (
            <BottomTab 
                key={index}
                itemText={item.itemText}
                itemIcon={item.itemIcon}
                setActiveTab={setActiveTab}
                activeTab={activeTab} />
            ))
        }
        </View>
    )
}