import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ListRenderItem,
} from 'react-native';
import Animated from 'react-native-reanimated';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
} from '../../../constants';

import { Profiles } from '../components/';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Movie } from '../types';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
  },
  headerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  headerProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerMirror: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
  thumbnailContainer: {
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: SIZES.width * 0.85,
    height: SIZES.width * 0.85,
    justifyContent: 'flex-end',
  },
  thumbnailImg: {
    borderRadius: 40,
  },
  contentContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    marginBottom: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playNowSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.transparentWhite,
  },
  playNowIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.white,
  },
  playNowText: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.h3,
  },
});

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const Home = ({}: Props) => {
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => {}}>
          <Image source={images.profile_photo} style={styles.headerProfile} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerBtn}>
          <Image source={icons.airplay} style={styles.headerMirror} />
        </TouchableOpacity>
      </View>
    );
  }

  const renderThumbnailItem: ListRenderItem<Movie> = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.thumbnailContainer}>
          <ImageBackground
            source={item.thumbnail}
            resizeMode="cover"
            style={styles.thumbnail}
            imageStyle={styles.thumbnailImg}>
            <View style={styles.contentContainer}>
              {/*Play Now*/}

              <View style={styles.playNowSection}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={icons.play}
                    resizeMode="contain"
                    style={styles.playNowIcon}
                  />
                </View>
                <Text style={styles.playNowText}>Play Now</Text>
              </View>
              {/*Still Watching*/}
              {item.stillWatching.length > 0 && (
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.h4,
                    }}>
                    Still Watching
                  </Text>
                  <Profiles profiles={item.stillWatching} />
                </View>
              )}
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  function renderNewSeasonSection() {
    const data = dummyData.newSeason;
    return (
      <AnimatedFlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={data}
        keyExtractor={item => `${item.id}`}
        onScroll={() => {}}
        renderItem={renderThumbnailItem}
      />
    );
  }
  // const onPress = () => navigation.navigate('MovieDetail');
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {renderNewSeasonSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
