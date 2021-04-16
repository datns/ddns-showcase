import React, { useEffect, useState } from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ParamListBase,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RouteProp,
} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ContinueMovie } from '../types';
import { COLORS, icons, SIZES } from '../../../constants';

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
  const renderHeaderSection = () => {
    return (
      <ImageBackground
        source={selectedMovie?.details?.image as number}
        resizeMode="cover"
        style={styles.headerBg}>
        <View style={styles.headerContainer}>{renderHeaderBar()}</View>
      </ImageBackground>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={{
        backgroundColor: COLORS.black,
      }}>
      {renderHeaderSection()}
    </ScrollView>
  );
};

export default MovieDetail;
