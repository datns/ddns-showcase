import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import { COLORS, icons } from '../../../constants';

import { TabIcon } from '../components';
import MovieDetail from '../screens/MovieDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Tabs"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.play_button} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
