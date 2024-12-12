import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../assets/Assests';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';

const ReduxHeader = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(0);
  const cartData = useSelector(state => state.cart);
  // console.warn('data', cartData);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  const isDisabled = cartItems === 0;

  return (
    <View
      style={{
        padding: Scale(10),
        width: '100%',
        backgroundColor: Colors.Primary,
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity
        onPress={() => !isDisabled && navigation.navigate('cart')}>
        <Image
          source={require('../../assets/images/cart.png')}
          style={{
            height: Scale(25),
            width: Scale(25),
            position: 'relative',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => !isDisabled && navigation.navigate('cart')}
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          right: Scale(5),
          top: Scale(3),
          borderRadius: Scale(9),
          paddingVertical: Scale(0),
          paddingHorizontal: Scale(5),
        }}>
        <Text
          style={{
            fontSize: Scale(14),
            color: Colors.White,
          }}>
          {cartItems}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReduxHeader;

const styles = StyleSheet.create({});
