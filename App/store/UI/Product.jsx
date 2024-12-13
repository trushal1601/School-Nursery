import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../Action';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';
import Fonts from '../../assets/fonts/Fonts';
import {Colors} from '../../assets/Assests';

const Product = ({item, index, mode}) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.id));
  };

  useEffect(() => {
    let result = cartData.find(element => element.id === item.id);
    if (result) {
      setIsAdded(true);
      setQuantity(result.quantity);
    } else {
      setIsAdded(false);
      setQuantity(0);
    }
  }, [cartData, item.id]);

  const specificTotalAmount = item.price * quantity;

  return (
    <View
      key={item.id}
      style={{
        borderWidth: Scale(1),
        width: Scale(170),
        alignItems: 'center',
        paddingVertical: Scale(25),
        margin: Scale(10),
        borderRadius: Scale(20),
        backgroundColor: Colors.White,
        borderColor: Colors.DarkGrey,
      }}>
      {mode == 'cart' && (
        <TouchableOpacity>
          <Text>Delete</Text>
        </TouchableOpacity>
      )}
      <Image
        source={getImageSource(item.image)}
        style={{height: Scale(100), width: Scale(100)}}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 15,
          fontFamily: Fonts.Lexend_Medium,
          paddingHorizontal: Scale(10),
        }}
        numberOfLines={2}>
        {item.title}
      </Text>
      <Text
        style={{
          paddingBottom: Scale(10),
          fontSize: Scale(18),
          fontFamily: Fonts.Lexend_Regular,
          paddingTop: Scale(10),
        }}>
        ₹{item.price}
      </Text>
      {isAdded ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => handleRemoveFromCart(item)}
            style={{
              borderWidth: Scale(1),
              padding: Scale(3),
              borderColor: Colors.Primary,
              borderRadius: Scale(9),
              paddingHorizontal: Scale(12),
            }}>
            <Text style={{fontSize: Scale(18)}}>-</Text>
          </TouchableOpacity>
          <Text style={{marginHorizontal: Scale(10)}}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => handleAddToCart(item)}
            style={{
              borderWidth: Scale(1),
              padding: Scale(3),
              borderColor: Colors.Primary,
              borderRadius: Scale(9),
              paddingHorizontal: Scale(10),
            }}>
            <Text style={{fontSize: Scale(17)}}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={{
            backgroundColor: Colors.Primary,
            padding: Scale(7),
            borderRadius: Scale(9),
          }}>
          <Text style={{color: Colors.White}}>Add to Cart</Text>
        </TouchableOpacity>
      )}
      {mode === 'cart' && (
        <View style={{marginTop: Scale(10)}}>
          <Text style={{fontSize: Scale(14), fontFamily: Fonts.Lexend_Medium}}>
            Total is : {specificTotalAmount}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
