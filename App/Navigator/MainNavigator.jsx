import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import ViewAll from '../Screen/AppFlow/Screens/ViewAll';
import Filter from '../Screen/AppFlow/Screens/Filter';
import Details from '../Screen/AppFlow/Screens/Details';
import AddReview from '../Screen/AppFlow/Screens/AddReview';
import Review from '../Screen/AppFlow/Screens/Review';
import ContactUs from '../Screen/AppFlow/Screens/ContactUs';
import FAQ from '../Screen/AppFlow/Screens/FAQ';
import PhotoGallery from '../Screen/AppFlow/Screens/PhotoGallery';
import Map from '../Screen/AppFlow/Screens/Map';
import Testimonials from '../Screen/AppFlow/Screens/Testimonials';
import Blogs from '../Screen/AppFlow/Screens/Blogs';
import RecentEventDetail from '../Screen/AppFlow/Screens/RecentEventDetail';
import ParentGuide from '../Screen/AppFlow/Screens/ParentGuide';
import NewsEvent from '../Screen/AppFlow/Screens/NewsEvent';
import AboutUs from '../Screen/AppFlow/Screens/AboutUs';
import RecentEvents from '../Screen/AppFlow/Screens/RecentEvent';
import BlogDetails from '../Components/BlogDetails';
import Cart from '../store/UI/Cart';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="viewAll" component={ViewAll} />
        <Stack.Screen name="filter" component={Filter} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="review" component={Review} />
        <Stack.Screen name="addReview" component={AddReview} />
        <Stack.Screen name="contactUs" component={ContactUs} />
        <Stack.Screen name="faq" component={FAQ} />
        <Stack.Screen name="gallery" component={PhotoGallery} />
        <Stack.Screen name="map" component={Map} />
        <Stack.Screen name="testimonials" component={Testimonials} />
        <Stack.Screen name="blogs" component={Blogs} />
        <Stack.Screen name="blogDetails" component={BlogDetails} />
        <Stack.Screen name="recentEvents" component={RecentEvents} />
        <Stack.Screen name="recentEventDetail" component={RecentEventDetail} />
        <Stack.Screen name="parentGuide" component={ParentGuide} />
        <Stack.Screen name="newsEvent" component={NewsEvent} />
        <Stack.Screen name="aboutUs" component={AboutUs} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
