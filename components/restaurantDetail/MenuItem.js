import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';


import MenuItemTitle from './MenuItemTitle';
import MenuItemDescription from './MenuItemDescription';
import MenuItemPrice from './MenuItemPrice';
import MenuItemImage from './MenuItemImage';



export default function MenuItem(props) {

  const { title, description, image, price, onPress, selected, ...other } = props;

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
      }
    }
  );
  /*return (
    <View>
      <View style={{
        flexDirection: 'column'
      }}>
        <MenuItemTitle title={title}/>
        <MenuItemDescription description={description}/>
        <MenuItemPrice price={price}/>
      </View>
      <View>
        <MenuItemImage imageSource={image}/>
      </View>
    </View>
  );*/

  return (
    <View style={styles.menuItemStyleSheet}>
      <BouncyCheckbox 
      fillColor="#52fc03"
      iconStyle={{borderColor: "lightgray",
      borderRadius: 10}}/>
      <View style={styles.textColumn}>
        <MenuItemTitle title={title}/>
        <MenuItemDescription description={description}/>
        <MenuItemPrice price={price}/>
      </View>
      <MenuItemImage imageSource={image}/>
    </View>
  );
}