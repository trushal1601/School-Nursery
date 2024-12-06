import { Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native'; 
import LandingPage from '../Screen/LandingPage/LandingPage';
import Login from '../Screen/Login/Login';
import SignUp from '../Screen/SignUp/SignUp';
import TabNavigation from './TabNavigation';
import Details from '../Screen/Details/Details';

const MainNavigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        {/* <View style={{backgroundColor:"white",flex:1}}> */}
        <Stack.Navigator initialRouteName='landing' screenOptions={{headerShown:false}}>
            <Stack.Screen name='landing' component={LandingPage}/>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='signup' component={SignUp}/>
            <Stack.Screen name='home' component={TabNavigation}/>
            <Stack.Screen name='details' component={Details}/>
        </Stack.Navigator>
        {/* </View> */}
    </NavigationContainer>
  )
}

export default MainNavigation