import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../assets/colors/Colors';
import Fonts from '../../assets/fonts/Fonts';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { EventHorizontalCardStyle } from './EventHorizontalCardStyle';
const EventHorizontalCard = ({data}) => {
  
    const navigation = useNavigation()
  return (
    <View style={EventHorizontalCardStyle.container}>
      <Header header={data.name} />
      <FlatList
        data={data.data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('recentEventDetail', {
                  event: item, header : data.name
                })
              }
              style={[EventHorizontalCardStyle.eventCard, {gap: item.img ? 20 : 0}]}>
              <Image source={item.img} style={EventHorizontalCardStyle.eventImage} />
              <View style={EventHorizontalCardStyle.textContainer}>
                <Text style={EventHorizontalCardStyle.eventDate}>{item.date}</Text>
                <Text style={EventHorizontalCardStyle.eventHeader}>{item.header}</Text>
                <Text style={EventHorizontalCardStyle.eventCompany}>{item.company}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default EventHorizontalCard;


