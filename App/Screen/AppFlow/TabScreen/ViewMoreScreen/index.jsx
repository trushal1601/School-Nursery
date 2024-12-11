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
import Labels from '../../../../assets/Label/Labels';
import { Images } from '../../../../assets/images/Images';

const ViewMoreScreen = ({navigation}) => {
  return (
    <View style={[ViewMoreScreenStyle.container, {flex: 1}]}>
      <Header header={Labels.more} showBack={false} />
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
                      source={Images.next_icon}
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
                      source={Images.next_icon}
                      style={ViewMoreScreenStyle.nextIcon}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={ViewMoreScreenStyle.socialContainer}>
          <TouchableOpacity>
            <Image
              source={Images.fb_icon}
              style={ViewMoreScreenStyle.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.twitter_icon}
              style={ViewMoreScreenStyle.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.linkIn_icon}
              style={ViewMoreScreenStyle.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.insta_icon}
              style={ViewMoreScreenStyle.socialIcon}
            />
          </TouchableOpacity>
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
