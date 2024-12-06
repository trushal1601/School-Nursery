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
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import searchImg from '../../../../assets/images/SearchPage.png';
import {Dropdown} from 'react-native-element-dropdown';
import Header from '../../../../Components/Header';
import {SearchScreenStyle} from './SearchScreenStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';

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
      <Header header={'Search'} showBack={false} />
      <View style={SearchScreenStyle.searchSection}>
        <View style={SearchScreenStyle.searchContainer}>
          <TextInput
            placeholder="Search by name, area or postcode"
            style={SearchScreenStyle.searchInput}
          />
          <Image
            source={require('../../../../assets/images/search.png')}
            style={SearchScreenStyle.searchIcon}
          />
        </View>
        <Dropdown
          style={SearchScreenStyle.dropdown}
          fontFamily={Fonts.Lexend_Regular}
          placeholderStyle={{fontSize: Scale(14)}}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Search for Nurseries"
          value={value}
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
          <Image source={searchImg} style={SearchScreenStyle.searchImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
