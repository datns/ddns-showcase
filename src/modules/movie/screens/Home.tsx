import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({ navigation }: Props) => {
  const onPress = () => navigation.navigate('MovieDetail');
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Navigate to Movie Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
