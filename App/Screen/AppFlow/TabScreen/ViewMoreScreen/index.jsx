import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../../Components/Header';
import {ViewMoreData} from '../../../../Components/JsonData/JsonData';
import {ViewMoreScreenStyle} from './ViewMoreScreenStyle';
import {date} from 'yup';

const ViewMoreScreen = ({navigation}) => {
  return (
    <View style={[ViewMoreScreenStyle.container,{flex:1}]}>
      <Header header={'More'} showBack={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ViewMoreScreenStyle.sectionContainer}>
          <View style={ViewMoreScreenStyle.listContainer}>
            <FlatList
              data={ViewMoreData.sec1}
              renderItem={({item}) => {
                const isDisabled = item.data === '';
                return (
                  <TouchableOpacity
                    onPress={() =>
                      !isDisabled &&
                      navigation.navigate('viewAll', {state: item.data})
                    }
                    style={[
                      ViewMoreScreenStyle.listItem,
                      isDisabled && ViewMoreScreenStyle.disabledItem,
                    ]}
                    disabled={isDisabled}>
                    <Text style={ViewMoreScreenStyle.listItemText}>
                      {item.name}
                    </Text>
                    <Image
                      source={require('../../../../assets/images/Next.png')}
                      style={ViewMoreScreenStyle.nextIcon}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={ViewMoreScreenStyle.listContainer}>
            <FlatList
              data={ViewMoreData.sec2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={ViewMoreScreenStyle.listItem}
                    onPress={() =>
                      navigation.navigate(item.navigate, {
                        mode: 'more',
                        data: item,
                      })
                    }>
                    <Text style={ViewMoreScreenStyle.listItemText}>
                      {item.name}
                    </Text>
                    <Image
                      source={require('../../../../assets/images/Next.png')}
                      style={ViewMoreScreenStyle.nextIcon}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={ViewMoreScreenStyle.socialContainer}>
          <Image
            source={require('../../../../assets/images/fb.png')}
            style={ViewMoreScreenStyle.socialIcon}
          />
          <Image
            source={require('../../../../assets/images/twitter.png')}
            style={ViewMoreScreenStyle.socialIcon}
          />
          <Image
            source={require('../../../../assets/images/linkdin.png')}
            style={ViewMoreScreenStyle.socialIcon}
          />
          <Image
            source={require('../../../../assets/images/insta.png')}
            style={ViewMoreScreenStyle.socialIcon}
          />
        </View>
        <View style={ViewMoreScreenStyle.footer}>
          <Text style={ViewMoreScreenStyle.footerText}>
            Copyright@2021 nurseriesandschools
          </Text>
          <Text style={ViewMoreScreenStyle.footerText}>Version 1.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewMoreScreen;
