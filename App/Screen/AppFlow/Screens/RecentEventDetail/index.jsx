import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import Colors from '../../../../assets/colors/Colors';
import Profile from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../../assets/fonts/Fonts';
import {EventDetail} from '../../../../Components/JsonData/JsonData';
import {RecentEventDetailStyle} from './RecentEventDetailStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';

const RecentEventDetail = ({route}) => {
  const {event, header} = route.params;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = () => {
    setExpandedId(!expandedId);
  };

  return (
    <View style={{backgroundColor: Colors.BackGroundColor, flex: 1}}>
      {header == 'Recent Events' ? (
        <Header header={'Event Details'} />
      ) : (
        <Header header={header} />
      )}
      <ScrollView
        contentContainerStyle={RecentEventDetailStyle.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            RecentEventDetailStyle.eventCard,
            {
              marginBottom: event.img ? Scale(10) : Scale(0),
              gap: event.img ? Scale(10) : Scale(0),
            },
          ]}>
          <Image source={event.img} style={RecentEventDetailStyle.eventImage} />
          <View style={RecentEventDetailStyle.textContainer}>
            <Text style={RecentEventDetailStyle.eventDate}>{event.date}</Text>
            <Text style={RecentEventDetailStyle.eventHeader}>
              {event.header}
            </Text>
          </View>
        </View>
        <View style={RecentEventDetailStyle.section}>
          <Text style={RecentEventDetailStyle.sectionTitle}>Description</Text>
          <Text
            numberOfLines={expandedId ? 0 : 2}
            style={RecentEventDetailStyle.descriptionText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            quisquam voluptatibus tenetur consectetur reiciendis fugiat, odio
            quasi eum voluptate quaerat facilis accusantium blanditiis, quos
            nisi veritatis quod perferendis nostrum ex!
          </Text>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={RecentEventDetailStyle.toggleText}>
              {expandedId ? 'Read Less' : 'Read More'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={RecentEventDetailStyle.section}>
          <View style={RecentEventDetailStyle.eventByContainer}>
            <View
              style={{
                flexDirection: 'row',
                gap: Scale(5),
                alignItems: 'center',
              }}>
              <Profile
                name={'account'}
                size={Scale(20)}
                color={Colors.Primary}
                style={{alignSelf: 'flex-start'}}
              />
              <Text style={RecentEventDetailStyle.eventByText}>Event by:</Text>
            </View>
            <Text style={RecentEventDetailStyle.eventByCompany}>
              {event.company}
            </Text>
          </View>
          <FlatList
            data={EventDetail.data1}
            renderItem={({item}) => (
              <View style={RecentEventDetailStyle.detailItem}>
                <Text style={RecentEventDetailStyle.detailHeader}>
                  {item.header}
                </Text>
                <Text style={RecentEventDetailStyle.detailText}>
                  {item.company}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
        <View style={RecentEventDetailStyle.section}>
          <FlatList
            data={EventDetail.data2}
            renderItem={({item}) => (
              <View style={RecentEventDetailStyle.detailItem}>
                <Text style={RecentEventDetailStyle.detailHeader}>
                  {item.header}
                </Text>
                <Text style={RecentEventDetailStyle.detailText}>
                  {item.link}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RecentEventDetail;
