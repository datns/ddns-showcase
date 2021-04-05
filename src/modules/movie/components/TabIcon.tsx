import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

interface Props {
  focused: boolean;
  icon: number;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

const TabIcon = ({ focused, icon }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.icon,
          {
            tintColor: focused ? COLORS.primary : COLORS.gray,
          },
        ]}
      />
    </View>
  );
};

export default TabIcon;
