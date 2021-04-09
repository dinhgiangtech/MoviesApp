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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RootNavigation from './src/NavigationDrawer';
import Main from './src/Main'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainReducer from './src/Redux/reducer'
import { Provider } from 'react-redux'
import watcherSaga from './src/Redux/saga'

const sagaMiddleware=createSagaMiddleware()
// Note: this API requires redux@>=3.1.0
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga)


const App = () => {
  return (
    <Provider store={store}><Main/></Provider>
)
  
};



export default App;
