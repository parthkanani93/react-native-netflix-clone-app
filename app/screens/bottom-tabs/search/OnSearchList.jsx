import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import Text from './../../../components/Text';
import View from './../../../components/View';
import styles from './../../../assets/stylesheets/searchScreen';
import { Image } from 'react-native-expo-image-cache';


const OnSearchList = ({ movies, handlePressDisplayShowInfo }) => 
{
    return (
        <View style={{ flex: 1 }}>
            <Text h4 style={ styles.searchHeaderTitle }>TV Shows and Movies</Text>
            <FlatList 
                keyExtractor={ ({ id }) => id.toString() }
                data={ movies }
                renderItem={ ({ item }) => (
                    <TouchableOpacity onPress={ () => handlePressDisplayShowInfo(item) }>
                        <Image
                            preview={{ uri: item.poster_path }}
                            uri={ item.poster_path }
                            style={ styles.image }
                        />
                    </TouchableOpacity>
                )}
                numColumns={ 3 }
            />
        </View>
    )
}

export default OnSearchList
