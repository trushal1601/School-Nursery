import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../../Components/Header';
import {Colors, Labels} from '../../../../assets/Assests';
import {useDispatch, useSelector} from 'react-redux';
import {
  addition,
  substraction,
  addToCart,
  getDataFromApi,
} from '../../../../store/Action';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import ReduxHeader from '../../../../store/UI/ReduxHeader';
import Product from '../../../../store/UI/Product';
import axios from 'axios';

const Map = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.main.counter);
  const dataFromApi = useSelector(state => state.getDatas);
  const [loading, setLoading] = useState(false);
  // console.log('dataFromApi', dataFromApi.category);

  // dataFromApi.forEach(item => {
  //   console.log('Category:', item.category);
  // });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(getDataFromApi(response.data));
    setLoading(false);
  };
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
        <Button onPress={() => dispatch(addition())} title="Increament" />
        <Text style={{fontFamily: Fonts.Lexend_Medium, fontSize: Scale(16)}}>
          {data}
        </Text>
        <Button onPress={() => dispatch(substraction())} title="Decrement" />
      </View>

      <View style={{flex: 1, backgroundColor: Colors.BackGroundColor}}>
        <ReduxHeader />
        {loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.Primary}
            style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}
          />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginBottom: Scale(10)}}>
            <FlatList
              numColumns={2}
              contentContainerStyle={{alignItems: 'center'}}
              data={dataFromApi}
              renderItem={({item, index}) => {
                return <Product item={item} index={index} mode={'home'} />;
              }}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
