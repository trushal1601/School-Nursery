import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {useSelector} from 'react-redux';
import Product from './Product';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';
import {Colors} from '../../assets/Assests';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const cartData = useSelector(state => state.cart);
  //   console.warn('cart', cartData);

  const totalAmount = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  if (cartData.length === 0) {
    navigation.goBack();
  }
  return (
    <View
      style={{
        // marginBottom: Scale(50),
        backgroundColor: Colors.BackGroundColor,
        flex: 1,
      }}>
      <Header header={'Cart'} />
      <FlatList
        data={cartData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}
        numColumns={2}
        renderItem={({item, index}) => {
          return <Product item={item} index={index} mode={'cart'} />;
        }}
      />
      <View
        style={{
          backgroundColor: Colors.Primary,
          margin: Scale(10),
          padding: Scale(15),
          borderRadius: Scale(19),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: Colors.White,
            fontSize: Scale(16),
            alignSelf: 'flex-start',
          }}>
          {'CheckOut  >>'}
        </Text>
        <Text
          style={{
            color: Colors.White,
            fontSize: Scale(18),
            alignSelf: 'flex-start',
          }}>
          ₹ {totalAmount}
        </Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
