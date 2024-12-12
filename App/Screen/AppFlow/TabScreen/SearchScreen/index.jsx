import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../../assets/Assests';
import Fonts from '../../../../assets/fonts/Fonts';
import {Dropdown} from 'react-native-element-dropdown';
import Header from '../../../../Components/Header';
import {SearchScreenStyle} from './SearchScreenStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import {Labels} from '../../../../assets/Assests';
import { Images } from '../../../../assets/Assests';

const SearchScreen = () => {
  const [value, setValue] = useState(null);
  const data = [
    {label: 'Nursery 1', value: 'nursery1'},
    {label: 'Nursery 2', value: 'nursery2'},
    {label: 'Nursery 3', value: 'nursery3'},
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={SearchScreenStyle.scrollView}>
      <StatusBar backgroundColor={Colors.Primary} />
      <Header header={Labels.search} showBack={false} />
      <View style={SearchScreenStyle.searchSection}>
        <View style={SearchScreenStyle.searchContainer}>
          <TextInput
            placeholder="Search by name, area or postcode"
            style={SearchScreenStyle.searchInput}
          />
          <Image
            source={Images.search_icon}
            style={SearchScreenStyle.searchIcon}
            tintColor={Colors.DarkGrey}
          />
        </View>
        <Dropdown
          style={SearchScreenStyle.dropdown}
          fontFamily={Fonts.Lexend_Regular}
          placeholderStyle={{fontSize: Scale(14), color: Colors.DarkGrey}}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Search for Nurseries"
          value={value}
          selectedTextStyle={{fontSize: Scale(13), color: Colors.Black}}
          itemTextStyle={{fontSize: Scale(12), color: Colors.Black}}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <View style={SearchScreenStyle.searchButtonContainer}>
          <TouchableOpacity style={SearchScreenStyle.searchButton}>
            <Text style={SearchScreenStyle.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={SearchScreenStyle.searchImageContainer}>
          <Image source={Images.search_img} style={SearchScreenStyle.searchImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
