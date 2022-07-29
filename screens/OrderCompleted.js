import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restaurantDetail/MenuItems';
import app from '../firebase';
import { getFirestore, collection, getDocs, query, orderBy, limit} from 'firebase/firestore';

export default function OrderCompleted( {navigation} ) {

  
  const { items, restaurantName } = useSelector( (state) => {
    return state.cartReducer.selectedItems;
  });
  
  //const [ lastOrder, setLastOrder ] = useState({items:items});
  const [ lastOrder, setLastOrder ] = useState({
    items: [{
      title: "",
      description: "",
      price: "",
      image: ""
    }]
  })
  const total = items.map( (item => Number(item.price.replace('$',''))))
    .reduce( (prev, current) => prev + current, 0);
  
  const totalEur = total.toLocaleString('fr-FR',{
    style: "currency",
    currency: "EUR",
  });

  const gatherFirebaseData = () => {
    const db = getFirestore(app);
    const ordersDoc = collection(db, 'orders');
    const q = query(ordersDoc, orderBy('createdAt', 'desc'), limit(1));

    // if we want to be listen in real time at any change, we would have used onSnapshot
    // which send back an unsubscribe function. [ pub/sub pattern ]
    getDocs(q).then( (snap) => { snap.forEach( (doc) => setLastOrder(doc.data())) });

  }

  useEffect( gatherFirebaseData, []);
  
  return (
    <View style={
      {
        flex: 1,
        backgroundColor: "white",
        margin: 15,
        height: "100%"
      }
    }>
      
      <LottieView style={{
        height: 100, 
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 30
      }}
      source={require('../assets/animations/33886-check-okey-done.json')}
      autoPlay loop={false}></LottieView>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Votre commande {restaurantName} a été validée</Text>
      <MenuItems foods={lastOrder.items} gotCheckboxes={false}/>
      <LottieView style={{
        alignSelf: "center",
        height:200,
      }}
      source={require('../assets/animations/cooking.json')}
      autoPlay loop={false}></LottieView>
      
    </View>

  )
}