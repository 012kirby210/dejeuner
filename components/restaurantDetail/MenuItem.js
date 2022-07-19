import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
//import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { CheckBox } from '@rneui/themed';

import { useDispatch, useSelector } from 'react-redux';

import MenuItemTitle from './MenuItemTitle';
import MenuItemDescription from './MenuItemDescription';
import MenuItemPrice from './MenuItemPrice';
import MenuItemImage from './MenuItemImage';


export default function MenuItem(props) {

  const { title, description, image, restaurantName, price, selected, ...other } = props;

  const selectedItems = useSelector( (state) => {
    return state.cartReducer.selectedItems.items;
  });

  const initialCheckState = selectedItems.reduce( ( acc, item ) => {
    return acc || item.title === title;}, false );

  const [ checked, setChecked ] = useState( initialCheckState );

  const styles = StyleSheet.create(
    {
      menuItemStyleSheet:{
        flexDirection:'row',
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textColumn: {
        flexDirection:'column',
        width: '50%',
        justifyContent: 'space-evenly'

      },
      imageColumn: {
        width: '30%',
        margin: 10
      },
      iconStyle: {
        borderColor: "lightgray",
        borderRadius: 10
      }
    }
  );

  const dispatch = useDispatch();
  const selectItem = (actualItem) => {
      dispatch(
        {
          type: 'UPDATE_CART',
          payload: actualItem
        }
      )
  };
  const onPress = () => {
    setChecked(!checked);
    selectItem({
      item:{
        price: price,
        description: description,
        image: image,
        title: title,
        checkboxValue: !checked
      },
      restaurantName: restaurantName,
    });
  }
  
  return (
    <View style={styles.menuItemStyleSheet}>
      <CheckBox 
      onPress={onPress}
      checked={checked}/>
      <View style={styles.textColumn}>
        <MenuItemTitle title={title}/>
        <MenuItemDescription description={description}/>
        <MenuItemPrice price={price}/>
      </View>
      <MenuItemImage imageSource={image}/>
    </View>
  );
}