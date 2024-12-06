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

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const data = [
    {label: 'Parent', value: 'parent'},
    {label: 'Gurdian', value: 'gurdian'},
    {label: 'Tutor', value: 'tutor'},
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = 'Name is required';
    if (!formValues.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = 'Invalid email';
    }
    if (!formValues.role) tempErrors.role = 'Role is required';
    if (!formValues.message) tempErrors.message = 'Message is required';

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formValues);
      navigation.navigate('Home');
    }
  };
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
                  <Rating
                    imageSize={20}
                    type="custom"
                    ratingBackgroundColor="#93A4BF"
                    tintColor="white"
                    startingValue={0}
                  />
                  {/* <AirbnbRating
                    size={Scale(17)}
                    count={5}
                    defaultRating={0}
                    showRating={false}
                    onFinishRating={(rating) => console.log(rating)}
                  /> */}
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
              onChangeText={value => handleChange('name', value)}
              value={formValues.name}
            />
            {errors.name && (
              <Text style={AddReviewStyle.errorText}>{errors.name}</Text>
            )}
          </View>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>Email</Text>
            <TextInput
              style={AddReviewStyle.textInput}
              placeholder="Your Email"
              onChangeText={value => handleChange('email', value)}
              value={formValues.email}
            />
            {errors.email && (
              <Text style={AddReviewStyle.errorText}>{errors.email}</Text>
            )}
          </View>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>I am</Text>
            <Dropdown
              style={AddReviewStyle.dropdown}
              fontFamily={Fonts.Lexend_Regular}
              placeholderStyle={{fontSize: Scale(14), color: Colors.DarkGrey}}
              data={data}
              selectedTextStyle={{fontSize: Scale(14), color: Colors.Black}}
              itemTextStyle={{fontSize: Scale(12), color: Colors.Black}}
              labelField="label"
              valueField="value"
              placeholder="Select an item"
              value={formValues.role}
              onChange={item => handleChange('role', item.value)}
            />
            {errors.role && (
              <Text style={AddReviewStyle.errorText}>{errors.role}</Text>
            )}
          </View>
          <View style={AddReviewStyle.formGroup}>
            <Text style={AddReviewStyle.formLabel}>Message</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={AddReviewStyle.textArea}
              placeholder="Type here..."
              onChangeText={value => handleChange('message', value)}
              value={formValues.message}
            />
            {errors.message && (
              <Text style={AddReviewStyle.errorText}>{errors.message}</Text>
            )}
          </View>
          <View style={AddReviewStyle.submitContainer}>
            <TouchableOpacity
              style={AddReviewStyle.submitButton}
              onPress={handleSubmit}>
              <Text style={AddReviewStyle.submitButtonText}>{submitText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddReview;
