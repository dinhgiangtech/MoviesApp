import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import  {Oscar,DC,Marvel}  from '../NavigationStack';


const Drawer = createDrawerNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Marvel" component={Marvel} />
        <Drawer.Screen name="OscarMovie2012" component={Oscar} />
        <Drawer.Screen name="DCMovie" component={DC} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}