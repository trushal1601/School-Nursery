import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Header';
import {Colors} from '../../assets/Assests';
import Fonts from '../../assets/fonts/Fonts';
import {useNavigation} from '@react-navigation/native';
import {BlogHorizontalCardStyle} from './BlogHorizontalCard';

const HorizontalCard = ({data}) => {
  const navigation = useNavigation();
  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.BackGroundColor}}>
      <Header header={data.name} />
      <FlatList
        data={data.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('blogDetails', {
                  blog: item,
                  header: data.name,
                })
              }
              style={BlogHorizontalCardStyle.blogCard}>
              <View style={BlogHorizontalCardStyle.imageContainer}>
                <Image
                  source={getImageSource(item.img)}
                  style={BlogHorizontalCardStyle.blogImage}
                />
                {data.name == 'Blogs' && (
                  <Text style={BlogHorizontalCardStyle.publishDateText}>
                    {item.publishDate}
                  </Text>
                )}
              </View>
              <View style={BlogHorizontalCardStyle.textContainer}>
                <Text style={BlogHorizontalCardStyle.readTimeText}>
                  {item.readTime}
                </Text>
                <Text style={BlogHorizontalCardStyle.headerText}>
                  {item.header}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HorizontalCard;
