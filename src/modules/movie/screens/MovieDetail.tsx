import React, { useEffect, useState } from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ParamListBase,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RouteProp,
} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ContinueMovie } from '../types';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { ProgressBar } from '../components';

type ParamList = {
  MovieDetail: {
    selectedMovie: ContinueMovie;
  };
};

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamList, 'MovieDetail'>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    paddingHorizontal: SIZES.padding,
  },
  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: COLORS.transparentBlack,
  },
  back: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  share: {
    width: 25,
    height: 25,
    tintColor: COLORS.white,
  },
  headerBg: {
    width: '100%',
    height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
  },
  headerContainer: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.gray1,
  },
  movieInfo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearView: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  season: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  name: {
    color: COLORS.white,
    marginTop: SIZES.base,
    ...FONTS.h1,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
    justifyContent: 'space-around',
  },
  episodeInfo: {
    flexDirection: 'row',
  },
  currentEpisode: {
    flex: 1,
    color: COLORS.white,
    ...FONTS.h4,
  },
  runningTime: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
  progressBar: {
    height: 5,
    borderRadius: 3,
  },
  mainButton: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? SIZES.padding * 2 : 0,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },
  buttonLabel: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  ratingCategoryContainer: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: COLORS.white,
    ...FONTS.h4,
  },
  start: {
    width: 15,
    height: 15,
    marginRight: SIZES.base,
  },
});

const MovieDetail = ({ navigation, route }: Props) => {
  const [selectedMovie, setSelectedMovie] = useState<ContinueMovie | null>(
    null,
  );

  useEffect(() => {
    let { selectedMovie: movie } = route.params;
    setSelectedMovie(movie);
  }, [route.params]);

  const renderHeaderBar = () => {
    return (
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}>
          <Image source={icons.left_arrow} style={styles.back} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton} onPress={() => {}}>
          <Image source={icons.upload} style={styles.share} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderCategoryAndRatings = () => {
    return (
      <View style={styles.ratingCategoryContainer}>
        {/*Age*/}
        <View style={styles.categoryContainer}>
          <Text style={styles.label}>{selectedMovie?.details.age}</Text>
        </View>
        {/*Genre*/}
        <View
          style={[
            styles.categoryContainer,
            {
              paddingHorizontal: SIZES.padding,
            },
          ]}>
          <Text style={styles.label}>{selectedMovie?.details.genre}</Text>
        </View>
        {/*Rating*/}
        <View style={styles.categoryContainer}>
          <Image
            source={icons.star}
            resizeMode="contain"
            style={styles.start}
          />
          <Text style={styles.label}>{selectedMovie?.details.ratings}</Text>
        </View>
      </View>
    );
  };
  const renderHeaderSection = () => {
    return (
      <ImageBackground
        source={selectedMovie?.details?.image as number}
        resizeMode="cover"
        style={styles.headerBg}>
        <View style={styles.headerContainer}>{renderHeaderBar()}</View>
        <View style={styles.movieInfo}>
          <LinearGradient
            // start={{ x: 0, y: 0 }}
            // end={{ x: 0, y: 100 }}
            colors={['transparent', 'black']}
            style={styles.linearView}>
            {/*Season*/}
            <Text style={styles.season}>{selectedMovie?.details.season}</Text>

            {/*Name*/}
            <Text style={styles.name}>{selectedMovie?.name}</Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    );
  };

  const renderMovieDetail = () => {
    return (
      <View style={styles.detailContainer}>
        {/*Title, running time and progress bar*/}
        <View>
          <View style={styles.episodeInfo}>
            <Text style={styles.currentEpisode}>
              {selectedMovie?.details.currentEpisode}
            </Text>
            <Text style={styles.runningTime}>
              {selectedMovie?.details.runningTime}
            </Text>
          </View>
          <ProgressBar
            containerStyle={{
              marginTop: SIZES.radius,
            }}
            barStyle={styles.progressBar}
            percentage={selectedMovie?.details.progress || '0%'}
          />
        </View>
        {/*Watch*/}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.buttonLabel}>
            {selectedMovie?.details?.progress === '0%'
              ? 'WATCH NOW'
              : 'CONTINUE WATCH'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={{
        backgroundColor: COLORS.black,
      }}>
      {renderHeaderSection()}
      {renderCategoryAndRatings()}
      {renderMovieDetail()}
    </ScrollView>
  );
};

export default MovieDetail;
