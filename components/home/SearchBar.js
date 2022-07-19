import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {GOOGLEPLACES_API_KEY} from "@env";

export default function SearchBar(props) {

    const { setCity } = props;

    const renderLeftButton = () => {
        return (
            <View style={{
                marginLeft: 10,
            }}>
                <Ionicons name="location-sharp" size={24}/>
            </View>
            ) 
    };

    const onPress = (data,detail) => {
        const city = data.description.split(',')[0];
        setCity(city);
    };

    const renderRightButton = () => {
        return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 5,
                paddingVertical: 9,
                borderRadius: 30,
                backgroundColor:'white',
                alignItems: "center",
                justifyContent: 'space-evenly',
                marginEnd: 10,
                width: 100
            }}>
                <AntDesign name="clockcircle" size={12}/>
                <Text>Search</Text>
            </View>
        );
    };

  return (
        <GooglePlacesAutocomplete 
                styles={{
                    textInput: {
                        backgroundColor: "#dddddd",
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 8,
                        
                    },
                    textInputContainer: {
                        backgroundColor: "#dddddd",
                        borderRadius: 50,
                        alignItems: "center",
                        flexDirection: "row",
                        
                    },
                    container: {
                        paddingHorizontal:10,
                        backgroundColor: "white",
                        flex: 0,
                        paddingVertical: 10
                    }
                }}
                placeholder="recherche"
                renderRightButton={renderRightButton}
                renderLeftButton={renderLeftButton}
                query={{key: GOOGLEPLACES_API_KEY}}
                onPress={onPress}
            />
  )
}