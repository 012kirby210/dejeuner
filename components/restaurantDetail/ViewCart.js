import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart() {

  const items = useSelector( (state) => {
    return state.cartReducer.selectedItems.items;
  });
  const total = items.map( (item => Number(item.price.replace('$',''))))
    .reduce( (prev, current) => prev + current, 0);
  
  const totalEur = total.toLocaleString('fr',{
    style: "currency",
    currency: "EUR",
  });

  const styles = StyleSheet.create({
      viewStyle: {
        flex:1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        zIndex: 100
      },
      touchableOpacityStyle: {
        marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 300,
        padding: 15,
        position: "relative"
      },
      textViewStyle: {
        color: "white",
        fontSize: 16,
      }
    }
  );


  return (
    <>
    {total ? (
    <View style={styles.viewStyle}>
        <View >
        <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Text style={styles.textViewStyle}>View Cart</Text>
        <Text style={styles.textViewStyle}>{totalEur}</Text>
      </TouchableOpacity>
      </View>
    </View>) : (<></>)}
    </>
    
  )
}