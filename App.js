import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState, useEffect } from 'react';
import Categories from "./components/Categories";
import HeaderTabs from "./components/HeaderTabs";
import Restaurants from "./components/Restaurants";
import SearchBar from "./components/SearchBar";
import { defaultRestaurants } from "./data/defaultRestaurants"
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import {YELP_API_KEY} from "@env";
import BottomBar from "./components/BottomBar";
import { Divider } from '@rneui/themed';

export default function App() {

  const [ restaurants, setRestaurants ] = useState(defaultRestaurants);
  const [ city, setCity ] = useState('');
  const [ activeTab, setActiveTab ] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location='+city;

    const apiOptions = {
      headers: {
        "Authorization": `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then( (response) => response.json())
      .then( (json) => { 
        let businesses = json.businesses;
        businesses = (typeof businesses === "undefined") ? [] : json.businesses;
        let filteredBusinesses = businesses.filter( (item) => {
          if (item.transactions !== undefined && "object" === typeof item.transactions){
            return item.transactions.includes(activeTab.toLocaleLowerCase());
          }
        });
        filteredBusinesses = filteredBusinesses.length !== 0 ? filteredBusinesses : businesses;
        setRestaurants(filteredBusinesses);
      })
      .catch(err => console.log(err));
  }


  useEffect( ()=> {getRestaurantFromYelp();}, [city, activeTab]);

  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "flex-start",
      flex:1,
      backgroundColor: "#dddddd",
    }}>
      <View style={{ flexDirection: "column", justifyContent: "flex-start"}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurants restaurants={restaurants} /> 
      </ScrollView>
      <Divider width={1} />
      <BottomBar />
     </View>
  );
}
