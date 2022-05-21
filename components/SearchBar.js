import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { AntDesign, Ionicons } from '@expo/vector-icons'

export default function SearchBar() {

    const drawLeftButton = () => {
        return (
            <View style={{
                marginLeft: 10,
            }}>
                <Ionicons name="location-sharp" size={24}/>
            </View>
            ) 
    };

    const drawRightButton = () => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                paddingHorizontal: 3,
                paddingVertical: 9,
                borderRadius: 30,
                backgroundColor:'white',
                marginRight:10,
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 100,
            }}>
                <AntDesign name="clockcircle" size={12}/>
                <Text style={{
                    paddingTop: 2,
                    marginHorizontal: 3,
                }}>Search</Text>
            </View>
        );
    };

  return (
    <View style={{
        marginTop: 10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginHorizontal: 10
    }}>
        
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
                    }
                }}
            
                placeholder="recherche"
            
                renderLeftButton={drawLeftButton}
                renderRightButton={drawRightButton} 
            />
        
    </View>
  )
}