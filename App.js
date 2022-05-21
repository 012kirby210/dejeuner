import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Categories from "./components/Categories";
import HeaderTabs from "./components/HeaderTabs";
import Restaurants from "./components/Restaurants";
import SearchBar from "./components/SearchBar";


const restaurants = [
  {
    name: "hokkaido japanese restaurant",
    waiting: "30 min",
    rating: "4",
    image: require( "./assets/images/hokkaido-restaurant-jaoponais.jpg")
  },
  {
    name: "hokkaido japanese restaurant",
    waiting: "30 min",
    rating: "4",
    image: require( "./assets/images/hokkaido-restaurant-jaoponais.jpg")
  },
  {
    name: "hokkaido japanese restaurant",
    waiting: "30 min",
    rating: "4",
    image: require( "./assets/images/hokkaido-restaurant-jaoponais.jpg")
  }
];


export default function App() {
  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "flex-start",
      flex:1,
      backgroundColor: "#dddddd",
    }}>
      <View style={{ flexDirection: "column", justifyContent: "flex-start"}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurants restaurants={restaurants} /> 
      </ScrollView>
     </View>
  );
}
