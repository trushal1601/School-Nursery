import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../Action';

const Product = ({item, index}) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartData = useSelector(state => state.cart);
  console.warn('data', cartData);
  const handleAddToCart = item => {
    console.warn(item, 'Clicked');
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = item => {
    console.warn(item);
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartData.filter(element => {
      return element.name == item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);
  return (
    <View
      key={index}
      style={{
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 25,
      }}>
      <Image
        source={item.img}
        style={{height: 100, width: 100}}
        resizeMode="contain"
      />
      <Text style={{fontSize: 18}}>{item.name}</Text>
      <Text style={{paddingBottom: 10, fontSize: 18}}>{item.price}</Text>
      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title=" Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
