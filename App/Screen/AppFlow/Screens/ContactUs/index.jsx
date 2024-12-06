import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Fonts from '../../../../assets/fonts/Fonts';
import Colors from '../../../../assets/colors/Colors';
import Header from '../../../../Components/Header';
import {ContactUsStyle} from './ContactUsStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import Labels from '../../../../assets/Label/Labels';

const ContactUs = ({navigation}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const data = [
    {label: 'Parent', value: 'parent'},
    {label: 'Guardian', value: 'guardian'},
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
    <View style={ContactUsStyle.container}>
      <Header header={Labels.contact_Us} />
      <View style={ContactUsStyle.formContainer}>
        <View style={ContactUsStyle.formGroup}>
          <Text style={ContactUsStyle.label}>Name</Text>
          <TextInput
            style={ContactUsStyle.input}
            placeholder="Your Name"
            onChangeText={value => handleChange('name', value)}
            value={formValues.name}
          />
          {errors.name && (
            <Text style={ContactUsStyle.errorText}>{errors.name}</Text>
          )}
        </View>
        <View style={ContactUsStyle.formGroup}>
          <Text style={ContactUsStyle.label}>Email</Text>
          <TextInput
            style={ContactUsStyle.input}
            placeholder="Your Email"
            onChangeText={value => handleChange('email', value)}
            value={formValues.email}
          />
          {errors.email && (
            <Text style={ContactUsStyle.errorText}>{errors.email}</Text>
          )}
        </View>
        <View style={ContactUsStyle.formGroup}>
          <Text style={ContactUsStyle.label}>I am</Text>
          <Dropdown
            style={ContactUsStyle.dropdown}
            fontFamily={Fonts.Lexend_Regular}
            data={data}
            placeholderStyle={{fontSize: Scale(14), color: Colors.DarkGrey}}
            labelField="label"
            selectedTextStyle={{fontSize: Scale(13), color: Colors.Black}}
            itemTextStyle={{fontSize: Scale(12), color: Colors.Black}}
            valueField="value"
            placeholder="Select an item"
            value={formValues.role}
            onChange={item => handleChange('role', item.value)}
          />
          {errors.role && (
            <Text style={ContactUsStyle.errorText}>{errors.role}</Text>
          )}
        </View>
        <View style={ContactUsStyle.formGroup}>
          <Text style={ContactUsStyle.label}>Message</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={ContactUsStyle.textArea}
            placeholder="Type Here..."
            onChangeText={value => handleChange('message', value)}
            value={formValues.message}
          />
          {errors.message && (
            <Text style={ContactUsStyle.errorText}>{errors.message}</Text>
          )}
        </View>
        <View style={ContactUsStyle.buttonContainer}>
          <TouchableOpacity
            style={ContactUsStyle.button}
            onPress={handleSubmit}>
            <Text style={ContactUsStyle.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;
