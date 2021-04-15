import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

interface Props {
  containerStyle: StyleProp<ViewStyle>;
  barStyle: StyleProp<ViewStyle>;
  percentage: string;
}

const styles = StyleSheet.create({
  barContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginTop: SIZES.base,
    backgroundColor: COLORS.gray,
  },
  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginTop: SIZES.base,
    backgroundColor: COLORS.primary,
  },
});

const ProgressBar = ({ containerStyle, barStyle, percentage }: Props) => {
  return (
    <View style={containerStyle}>
      <View style={[styles.barContainer, barStyle]} />

      <View style={[barStyle, styles.bar, { width: percentage }]} />
    </View>
  );
};

export default ProgressBar;
