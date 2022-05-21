import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import Categories from "./components/Categories";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "flex-start",
      flex:1,
      backgroundColor: "aaaaaa",
    }}>
      <View style={{ flexDirection: "column", justifyContent: "flex-start"}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <View style={{}}>
        <Categories />
      </View>
     </View>
     
  );
}
