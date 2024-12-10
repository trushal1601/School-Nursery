import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import Labels from '../../../../assets/Label/Labels';
import {useDispatch, useSelector} from 'react-redux';
import {addition, substraction} from '../../../../store/Action';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import {ReduxData} from '../../../../Components/JsonData/JsonData';
import {Image} from 'react-native';

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
        {/* <View style={{height: 50, width: '100%', backgroundColor: '#fcec08'}}>
        <Text style={{fontSize: 30, textAlign: 'right', paddingRight: 10}}>
          {value}
        </Text>
      </View> */}
        <ScrollView>
          {ReduxData.map((item, index) => (
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
              <Text style={{paddingBottom: 10, fontSize: 18}}>
                {item.price}
              </Text>
              <Button title="Add to Cart" />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
