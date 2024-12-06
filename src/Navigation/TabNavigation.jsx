import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/Home/HomeScreen';
import Search from '../Screen/Search/Search';
import AddPost from '../Screen/AddPost/AddPost';
import Profile from '../Screen/Profile/Profile';
import HomeImg from '../assets/home.png';
import SearchImg from '../assets/search.png';
import PostImg from '../assets/addition.png';
import ProfileImg from '../assets/profile-user.png';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 13},
        tabBarStyle: {
          paddingBottom: 20,
          borderRadius: 23,
          marginBottom: 15,
          marginHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image source={HomeImg} style={{width: 30, height: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Search}
        options={{
          tabBarIcon: ({}) => (
            <Image source={SearchImg} style={{width: 25, height: 25}} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({}) => (
            <Image source={PostImg} style={{width: 25, height: 25}} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({}) => (
            <Image source={ProfileImg} style={{width: 25, height: 25}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
