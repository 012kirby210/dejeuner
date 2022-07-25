import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import app from '../../firebase';
import { getFirestore, collection, doc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ViewCart() {

  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector( (state) => {
    return state.cartReducer.selectedItems;
  });

  const total = items.map( (item => Number(item.price.replace('$',''))))
    .reduce( (prev, current) => prev + current, 0);
  
  const totalEur = total.toLocaleString('fr-FR',{
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
        justifyContent: "center",
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

  const hideModal = () => { setModalVisible(false);}
  const showModal = () => { setModalVisible(true);}

  const modalStyle = StyleSheet.create({
    wrappingView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    wrappedView: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 30,
      width: 150,
      alignItems: 'center'
    },
    textView: {
      color: 'white',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: '700',
      fontSize: 16,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '700',
      fontSize: 14,
      marginBottom: 10,
    }
  });  

  const checkoutModalContent = () => {
    return (
     <>
      <View style={modalStyle.modalContainer}>
        <View style={modalStyle.modalCheckoutContainer}>
          <Text style={modalStyle.restaurantName}>{restaurantName}</Text>
          {items.map( (item, index) => {
            return (<OrderItem key={index} item={item} />);
          } )}
          <View style={modalStyle.subtotalContainer}>
            <Text style={modalStyle.subtotalText}>Total : </Text>
            <Text style={modalStyle.subtotalText}>{totalEur}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style={{
              marginTop: 20,
              backgroundColor: 'black',
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              width: 300,
              position: "relative",
              flexDirection: "row",
              justifyContent: "center",
            }}
              onPress={addOrderToFirebase}
            >
              <Text style={{
                color: 'white',
                fontSize: 20
              }}>Checkout </Text>
              <Text style={{ 
                color: 'white',
                fontSize: 20,
              }}>{totalEur ? totalEur : ''}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     </>
    );
  };
  const onRequestClose = () => { setModalVisible(false)}


  const addOrderToFirebase = () => {
    const db = getFirestore(app);
    const ordersDocRef = addDoc( collection(db,'orders'), {
      items: items,
      restaurantName: restaurantName,
      createdAt: serverTimestamp(),
    });
    hideModal();
  }
  return (
    <>
    <Modal animationType="slide" 
      visible={modalVisible}
      transparent={true}
      onRequestClose={addOrderToFirebase}
    >
      {checkoutModalContent()}
    </Modal>
    {total ? (
    <View style={styles.viewStyle}>
        <View >
        <TouchableOpacity onPress={showModal} 
          style={styles.touchableOpacityStyle}>
          <Text style={styles.textViewStyle}>View Cart </Text>
          <Text style={styles.textViewStyle}>{totalEur}</Text>
        </TouchableOpacity>
      </View>
    </View>) : (<></>)}
    </>
    
  )
}