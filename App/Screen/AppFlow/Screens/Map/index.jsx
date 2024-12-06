import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../../Components/Header';

const Map = () => {
  return (
    <View>
      <Header header={'Find on Map'} showBack={false} showClose={true} />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
