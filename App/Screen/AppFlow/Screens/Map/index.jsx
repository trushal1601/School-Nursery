import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../../Components/Header';
import Labels from '../../../../assets/Label/Labels';

const Map = () => {
  return (
    <View>
      <Header header={Labels.map} showBack={false} showClose={true} />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
