import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import Colors from '../../../../assets/colors/Colors';
import {FeatursforReview} from '../../../../Components/JsonData/JsonData';
import {AirbnbRating, Rating} from 'react-native-ratings';
import Fonts from '../../../../assets/fonts/Fonts';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {AddReviewStyle} from './AddReviewStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';

const AddReview = ({route}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const {mode} = route.params;
  const headerText = mode === 'edit' ? 'Submit Review' : 'Add Review';
  const submitText = mode === 'edit' ? 'Back to Reviews' : 'Submit Review';

  const data = [
    {label: 'Parent', value: 'parent'},
    {label: 'Gurdian', value: 'gurdian'},
    {label: 'Tutor', value: 'tutor'},
  ];
  return (
    <View style={AddReviewStyle.container}>
      <Header header={headerText} />
      <ScrollView
        style={AddReviewStyle.scrollView}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={FeatursforReview}
          renderItem={({item}) => {
            return (
              <View style={AddReviewStyle.featureItem}>
                <View style={AddReviewStyle.featureItemContent}>
                  <View style={AddReviewStyle.featureTextContainer}>
                    <Text style={AddReviewStyle.featureText}>{item.name}</Text>
                  </View>
                  {/* <Rating imageSize={17} ratingBackgroundColor="#93A4BF" /> */}
                  <AirbnbRating
                    size={Scale(17)}
                    count={5}
                    defaultRating={0}
                    showRating={false}
                  />
                </View>
              </View>
            );
          }}
        />
        <View style={AddReviewStyle.formContainer}>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>Name</Text>
            <TextInput
              style={AddReviewStyle.textInput}
              placeholder="Your Name"
            />
          </View>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>Email</Text>
            <TextInput
              style={AddReviewStyle.textInput}
              placeholder="Your Email"
            />
          </View>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>I am</Text>
            <Dropdown
              style={AddReviewStyle.dropdown}
              fontFamily={Fonts.Lexend_Regular}
              placeholderStyle={{fontSize:Scale(14)}}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Select an item"
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>Message</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={AddReviewStyle.textArea}
              placeholder="Type here..."
            />
          </View>
          <View style={AddReviewStyle.submitContainer}>
            <TouchableOpacity
              style={AddReviewStyle.submitButton}
              onPress={() => navigation.goBack()}>
              <Text style={AddReviewStyle.submitButtonText}>{submitText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddReview;
