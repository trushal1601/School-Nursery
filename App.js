import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Fonts from './App/assets/fonts/Fonts';
import MainNavigator from './App/Navigator/MainNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainNavigator />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
