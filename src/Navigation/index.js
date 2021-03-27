/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListMovies from '../screens/ListMovies';
import DetailMovie from '../screens/DetailMovie';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import searchEngine from '../screens/Search'




const Stack2 = createStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
     <Stack2.Navigator screenOptions={{ headerShown: false }}>
          <Stack2.Screen name="MarvelList" component={ListMovies} />
          <Stack2.Screen name="DetailMovie" component={DetailMovie} />
          <Stack2.Screen name="Search" component={searchEngine} />
      </Stack2.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
