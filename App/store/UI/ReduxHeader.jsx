import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Colors} from '../../assets/Assests';
import { useSelector } from 'react-redux';

const ReduxHeader = () => {
  const [cartItems,setCartItems] = useState(0)
  const cartData = useSelector((state)=> state.cart)
  console.warn("data",cartData);
useEffect(()=>{
  setCartItems(cartData.length)
},[cartData])
  
  return (
    <View style={{height: 50, width: '100%', backgroundColor: Colors.Primary}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          paddingRight: 10,
          color: Colors.White,
        }}>
        {cartItems}
      </Text>
    </View>
  );
};

export default ReduxHeader;

const styles = StyleSheet.create({});
