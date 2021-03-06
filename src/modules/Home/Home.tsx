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
    backgroundColor: 'tomato',
  },
});
function HomeScreen({ navigation }: Props) {
  const goToMovie = () => navigation.navigate('Movie');
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={goToMovie}>
        <Text>Movie App</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
