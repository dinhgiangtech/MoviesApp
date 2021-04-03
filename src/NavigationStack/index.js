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
 import OscarMovies from '../screens/OscarMovies.js';
 import DCMovies from '../screens/DCMovies.js';
 
 const Stack = createStackNavigator();
 const Stack1 = createStackNavigator();
 const Stack2 = createStackNavigator();
 export const Marvel = () => {
   return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name="MarvelList" component={ListMovies} />
           <Stack.Screen name="DetailMovie" component={DetailMovie} />
           <Stack.Screen name="Search" component={searchEngine} />
       </Stack.Navigator>
    
   );
 };
 export const Oscar = () => {
    return (
     
       <Stack1.Navigator screenOptions={{ headerShown: false }}>
            <Stack1.Screen name="MarvelMovie" component={OscarMovies} />
            <Stack1.Screen name="DetailMovie" component={DetailMovie} />
            <Stack1.Screen name="Search" component={searchEngine} />
        </Stack1.Navigator>
     
    );
  };
  export const DC = () => {
    return (
     
       <Stack2.Navigator screenOptions={{ headerShown: false }}>
            <Stack2.Screen name="DCMovies" component={DCMovies} />
            <Stack2.Screen name="DetailMovie" component={DetailMovie} />
            <Stack2.Screen name="Search" component={searchEngine} />
        </Stack2.Navigator>
     
    );
  };
 

 