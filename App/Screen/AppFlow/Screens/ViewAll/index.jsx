import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../../assets/Assests';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {ViewAllStyle} from './ViewAllStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import { Images } from '../../../../assets/Assests';

const ViewAll = ({navigation, route}) => {
  const state = route.params;
  // console.log(state.state[0].placeholder);

  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };

  const renderInfo = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('details', {details: item});
        }}
        style={ViewAllStyle.card}>
        <View style={ViewAllStyle.cardHeader}>
          <Image source={getImageSource(item.img)} style={ViewAllStyle.cardImage} />
          <Text
            style={[
              ViewAllStyle.status,
              item.status === 'Open'
                ? ViewAllStyle.statusOpen
                : ViewAllStyle.statusClosed,
            ]}>
            {item.status}
          </Text>
        </View>
        <View style={ViewAllStyle.cardBody}>
          <View style={ViewAllStyle.nameContainer}>
            <Text style={ViewAllStyle.name}>{item.name}</Text>
          </View>
          {/* <Rating readonly startingValue={4} imageSize={18} /> */}
          <AirbnbRating
            size={Scale(16)}
            count={5}
            defaultRating={4}
            showRating={false}
            isDisabled={true}
          />
        </View>
        <View style={ViewAllStyle.cardFooter}>
          <Text style={ViewAllStyle.address}>
            33-37 Wigston Road Leicester, LE2 5QF
          </Text>
          <TouchableOpacity style={ViewAllStyle.emailButton}>
            <Text style={ViewAllStyle.emailText}>Email Us</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={ViewAllStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={Colors.Primary} />
        <View style={ViewAllStyle.header}>
          <View style={ViewAllStyle.headerContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={Images.back_icon}
                style={ViewAllStyle.backIcon}
                tintColor={Colors.White}
              />
            </TouchableOpacity>
            <Text style={ViewAllStyle.headerTitle}>
              {state.state[0]?.category}
            </Text>
            <View></View>
          </View>
          <View style={ViewAllStyle.searchContainer}>
            <View style={ViewAllStyle.searchBox}>
              <TextInput
                placeholder={`search for ${state.state[0].category}`}
                style={ViewAllStyle.searchInput}
                placeholderTextColor={Colors.White}
              />
              <Image
                source={Images.search_icon}
                style={ViewAllStyle.searchIcon}
                tintColor="white"
              />
            </View>
            <TouchableOpacity
              style={ViewAllStyle.filterButton}
              onPress={() => navigation.navigate('filter')}>
              <Image
                source={Images.filter_icon}
                style={ViewAllStyle.filterIcon}
                tintColor={Colors.White}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={state?.state}
          renderItem={renderInfo}
          contentContainerStyle={{marginHorizontal: Scale(5)}}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default ViewAll;
