import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../../constants';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Profile } from '../types';

interface Props {
  profiles: Profile[];
}
const Profiles = ({ profiles }: Props) => {
  if (profiles.length <= 3) {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => (
          <View
            key={`profiles-${index}`}
            style={
              index === 0
                ? null
                : {
                    marginLeft: -15,
                  }
            }>
            <Image
              source={item.profile}
              resizeMode="cover"
              style={styles.profileImg}
            />
          </View>
        ))}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {profiles.map((item, index) => {
        if (index <= 2) {
          return (
            <View
              key={`profile-${index}`}
              style={index === 0 ? null : { marginLeft: -15 }}>
              <Image
                source={item.profile}
                resizeMode="cover"
                style={styles.profileImg}
              />
            </View>
          );
        }
      })}
      <Text style={styles.extraText}>+{profiles.length - 3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
  extraText: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3,
  },
});

export default Profiles;
