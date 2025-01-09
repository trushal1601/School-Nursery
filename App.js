import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Fonts from './App/assets/fonts/Fonts';
import MainNavigator from './App/Navigator/MainNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {persistor, store} from './App/store/Store';
import MainNavigation from './src/Navigation/MainNavigation';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <MainNavigator />
          {/* <MainNavigation/> */}
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
