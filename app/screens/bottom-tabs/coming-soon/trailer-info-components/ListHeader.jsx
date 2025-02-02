import React, { useState, useEffect } from 'react'
import { ToastAndroid } from 'react-native'
import View from './../../../../components/View';
import VideoPlayer from './../../../../components/VideoPlayer';
import ShowInfo from './ShowInfo';
import ActionButton from '../../../../components/ActionButton';
import TrailerAndMoreLikeThisTab from './TrailerAndMoreLikeThisTab';
import MoreLikeThis from './MoreLikeThis';
import TrailersAndMore from './TrailersAndMore';
import { useDispatch, connect } from 'react-redux';
import * as AUTH_ACTION from './../.././../../redux/modules/auth/actions'
import { Divider } from 'react-native-elements';
import styles from './../../../../assets/stylesheets/trailerInfo';
import { createStructuredSelector } from 'reselect';
import { authProfileSelector } from './../../../../redux/modules/auth/selectors';

const ListHeader = ({ AUTH_PROFILE, comingSoonMovie }) => 
{
    const hasLikedMovie = Boolean(AUTH_PROFILE.liked_coming_soon_movies.find(({ movie_id }) => movie_id === comingSoonMovie.id));
    const [ selectedTabCategory, setSelectedTabCategory ] = useState(1);

    const handlePressSimilarShow = (recommendedSimilarShow) => navigation.push('TrailerInfo', { comingSoonMovie: recommendedSimilarShow });

    useEffect(() => {
        return () => {
            setSelectedTabCategory(1);
        }
    }, []); 

    return (
        <View>
            <VideoPlayer
                shouldPlay={ true }
                shouldToggleVideo={ false }
                videoPath={ comingSoonMovie.video_trailer_path }
                posterPath={ comingSoonMovie.poster_path }
            />
            <ShowInfo comingSoonMovie={ comingSoonMovie } />

            <ActionButton movie={ comingSoonMovie } modelType='ComingSoonMovie' hasLikedMovie={ hasLikedMovie } />

            <Divider style={ styles.divider } />

            <TrailerAndMoreLikeThisTab 
                selectedTabCategory={ selectedTabCategory } 
                setSelectedTabCategory={ setSelectedTabCategory } 
            />

            {
                !selectedTabCategory
                    ? (
                        <MoreLikeThis 
                            comingSoonMovie={ comingSoonMovie }
                            handlePressSimilarShow={ handlePressSimilarShow }
                        />
                    )
                    : <TrailersAndMore trailers={ comingSoonMovie.trailers } />
            }
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
    AUTH_PROFILE: authProfileSelector
});

export default connect(mapStateToProps)(ListHeader)
