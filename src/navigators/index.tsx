import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../modules/Home/Home';
import Movie from '../modules/movie/navigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
