import React from 'react'
import { Image } from "react-native-expo-image-cache";
import { useNavigation } from '@react-navigation/native'
import { FlatList, Pressable } from 'react-native'
import styles from '../../assets/stylesheets/homeCategory';
import Text from '../Text';
import View from './../View';
import MostLikedBadge from './../MostLikedBadge';


const HomeCategory = ({ title, categorizedMovies }) => 
{
    const navigation = useNavigation();

    const handlePressImage = (movie) => {
        navigation.navigate('MovieDetailScreen', { 
            id: movie.id, 
            headerTitle: movie.title 
        });
    }

    return (
        <View>
            <Text h4 style={ styles.categoryTitle }>{ title }</Text>
            <FlatList 
                keyExtractor={(item, index) => index.toString() }
                data={ categorizedMovies }
                renderItem={({ item }) => (
                    <Pressable onPress={ () => handlePressImage(item) } style={ styles.imageContainer }>
                        <Image 
                            preview={{ uri: item.poster_path }}
                            style={ styles.image }
                            uri={ item.poster_path }
                        />
                        <MostLikedBadge movieId={ item.id } />
                    </Pressable>
                )}
                maxToRenderPerBatch={ 3 }
                horizontal
                style={ styles.categoryContainer }
                showsHorizontalScrollIndicator={ false }
                showsVerticalScrollIndicator={ false }
            />
        </View>
    )
}

export default HomeCategory
