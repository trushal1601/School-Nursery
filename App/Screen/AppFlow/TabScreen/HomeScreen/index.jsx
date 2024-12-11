import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../../assets/colors/Colors';
import {
  HorizontalScroll,
  VerticalScroll,
} from '../../../../Components/HomeScreenCompo';
import Carousel from '../../Screens/Carousal';
import {
  Company,
  Nannies,
  Nursery,
  NurseryGroup,
  School,
  SchoolGroup,
  Tutor,
} from '../../../../Components/JsonData/JsonData';
import {HomeScreenStyles} from './HomeScreenStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import {Images} from '../../../../assets/images/Images';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={HomeScreenStyles.scrollView}>
      <StatusBar backgroundColor={Colors.Primary} />
      <View style={HomeScreenStyles.headerContainer}>
        <Text style={HomeScreenStyles.greetingText}>Hello,</Text>
        <Text style={HomeScreenStyles.welcomeText}>Welcome to</Text>
        <Text style={HomeScreenStyles.titleText}>Nurseries & Schools</Text>
        <View style={HomeScreenStyles.searchContainer}>
          <TextInput
            placeholder="Search by name, area or postcode"
            style={HomeScreenStyles.searchInput}
            placeholderTextColor={Colors.White}
          />
          <Image
            source={Images.search_icon}
            style={HomeScreenStyles.searchIcon}
            tintColor={'white'}
          />
        </View>
      </View>
      <Carousel />
      <View style={HomeScreenStyles.contentContainer}>
        <View>
          <HorizontalScroll firstText="Featured Nurseries" data={Nursery} />
        </View>
        <View>
          <VerticalScroll
            firstText="Featured Nursery Group"
            data={NurseryGroup}
          />
        </View>
        <View>
          <HorizontalScroll firstText="Featured Schools" data={School} />
        </View>
        <View>
          <VerticalScroll
            firstText="Featured School Group"
            data={SchoolGroup}
          />
        </View>
        <View>
          <HorizontalScroll firstText="Featured Nannies" data={Nannies} />
        </View>
        <View>
          <HorizontalScroll firstText="Featured Companies" data={Company} />
        </View>
        <View>
          <HorizontalScroll firstText="Featured Tutors" data={Tutor} />
        </View>
        <View style={{height: Scale(20)}}></View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
