import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import {PersonName} from '../../../../Components/JsonData/JsonData';
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {ReviewStyle} from './ReviewStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import Labels from '../../../../assets/Label/Labels';

const Review = ({navigation, route}) => {
  const {mode, data} = route.params;
  const headerText = mode === 'more' ? Labels.latest_Review : Labels.review;
  return (
    <View style={ReviewStyle.container}>
      <Header header={headerText} />
      <FlatList
        data={PersonName}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={ReviewStyle.reviewItem}>
              <View style={ReviewStyle.reviewHeader}>
                <View style={ReviewStyle.reviewTitleContainer}>
                  <Text style={ReviewStyle.reviewTitle}>{item.name}</Text>
                  <AirbnbRating
                    size={Scale(14)}
                    count={5}
                    defaultRating={4}
                    showRating={false}
                    isDisabled={true}
                  />
                </View>
                <Text style={ReviewStyle.reviewDate}>2 months ago</Text>
              </View>
              <View style={ReviewStyle.reviewContent}>
                <Text style={ReviewStyle.reviewText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </Text>
                <TouchableOpacity
                  //  onPress={() => toggleExpanded(item.id)}
                  onPress={() =>
                    navigation.navigate('addReview', {mode: 'edit'})
                  }>
                  <Text style={ReviewStyle.toggleText}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      {mode !== 'more' && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('addReview', {mode: 'add'});
          }}>
          <Image
            source={require('../../../../assets/images/Add.png')}
            style={ReviewStyle.addButton}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Review;
