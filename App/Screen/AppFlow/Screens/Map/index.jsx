import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import {Labels} from '../../../../assets/Assests';
import {useDispatch, useSelector} from 'react-redux';
import {addition, substraction, addToCart} from '../../../../store/Action';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import {ReduxData} from '../../../../Components/JsonData/JsonData';
import ReduxHeader from '../../../../store/UI/ReduxHeader';
import Product from '../../../../store/UI/Product';

const Map = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter);
 
  return (
    <View style={{flex: 1}}>
      <Header header={Labels.map} showBack={false} showClose={true} />
      <View
        style={{
          // flex: 1,
          height: Scale(150),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => dispatch(addition())}
          title="Increament"></Button>
        <Text style={{fontFamily: Fonts.Lexend_Medium, fontSize: Scale(16)}}>
          {data}
        </Text>
        <Button
          onPress={() => dispatch(substraction())}
          title="Decrement"></Button>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ReduxHeader/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={ReduxData}
            renderItem={({item, index}) => {
              return (
               <Product item={item} index={index}/>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
