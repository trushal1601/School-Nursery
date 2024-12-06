import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../Screen/AppFlow/TabScreen/SearchScreen';
import ViewMoreScreen from '../Screen/AppFlow/TabScreen/ViewMoreScreen';
import Home from 'react-native-vector-icons/Entypo';
import Menu from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/colors/Colors';
import Fonts from '../assets/fonts/Fonts';
import HomeScreen from '../Screen/AppFlow/TabScreen/HomeScreen';
import Scale from '../Screen/AuthFlow/ResponsiveScreen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: Scale(20),
          borderTopRightRadius: Scale(20),
          height: Scale(55),
          backgroundColor: Colors.White,
          // Android shadow
          elevation: 30,
          // iOS shadow
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -2},
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <Home name={'home'} size={Scale(20)} color={Colors.Primary} />
                ) : (
                  <Home name={'home'} size={Scale(20)} color={Colors.Black} />
                )}
              </View>
            );
          },
          tabBarButton: props => (
            <TouchableWithoutFeedback {...props}>
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Colors.Primary : Colors.Black,
                fontFamily: Fonts.Lexend_Medium,
                fontSize: Scale(12),
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  marginTop: Scale(-15),
                  backgroundColor: Colors.Star,
                  borderRadius: Scale(99),
                  padding: Scale(10),
                  alignItems: ' ',
                }}>
                <Image
                  source={require('../assets/images/search.png')}
                  style={{width: Scale(25), height: Scale(25)}}
                  tintColor={'white'}
                />
              </View>
            );
          },
          tabBarLabel: () => null,
          tabBarButton: props => (
            <TouchableWithoutFeedback {...props}>
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="viewMore"
        component={ViewMoreScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <Menu
                    name={'menufold'}
                    size={Scale(20)}
                    color={Colors.Primary}
                  />
                ) : (
                  <Menu
                    name={'menufold'}
                    size={Scale(20)}
                    color={Colors.Black}
                  />
                )}
              </View>
            );
          },
          tabBarButton: props => (
            <TouchableWithoutFeedback {...props}>
              <View {...props} />
            </TouchableWithoutFeedback>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Colors.Primary : Colors.Black,
                fontFamily: Fonts.Lexend_Medium,
                fontSize: Scale(12),
              }}>
              More
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
