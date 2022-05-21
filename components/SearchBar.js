import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {

    const renderLeftButton = () => {
        return (
            <View style={{
                marginLeft: 10,
                flex: 0,
                
            }}>
                <Ionicons name="location-sharp" size={24}/>
            </View>
            ) 
    };

    const renderRightButton = () => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                paddingHorizontal: 3,
                paddingVertical: 9,
                borderRadius: 30,
                backgroundColor:'white',
                paddingRight:10,
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 100,
            }}>
                <AntDesign name="clockcircle" size={12}/>
                <Text style={{
                    paddingTop: 2,
                    paddingHorizontal: 3,
                }}>Search</Text>
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
                        flex: 1
                    },
                    textInputContainer: {
                        backgroundColor: "#dddddd",
                        borderRadius: 50,
                        alignItems: "center",
                        flexDirection: "row",
                    },
                    container: {
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flex:0,
                    }
                }}
                placeholder="recherche"
                renderRightButton={renderRightButton}
                renderLeftButton={renderLeftButton}
                
                
            />
        
    
  )
}