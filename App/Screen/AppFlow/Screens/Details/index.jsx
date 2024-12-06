import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../../../Components/Header';
import Fonts from '../../../../assets/fonts/Fonts';
import Colors from '../../../../assets/colors/Colors';
import {AirbnbRating} from 'react-native-ratings';
import Profile from 'react-native-vector-icons/MaterialCommunityIcons';
import Feature from 'react-native-vector-icons/Entypo';
import Timing from 'react-native-vector-icons/FontAwesome5';
import {DetailsFooter} from '../../../../Components/JsonData/JsonData';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import {DetailsStyle} from './DetailsStyle';

const {width} = Dimensions.get('window');

const Details = ({route, navigation}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {details} = route.params;

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = id => {
    setExpandedId(!expandedId);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prevIndex => {
  //       const nextIndex = prevIndex + 1;
  //       if (nextIndex >= details.headerImg.length) {
  //         return 0;
  //       }
  //       return nextIndex;
  //     });
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [details.headerImg.length]);

  // useEffect(() => {
  //   if (flatListRef.current) {
  //     flatListRef.current.scrollToIndex({index: currentIndex, animated: true});
  //   }
  // }, [currentIndex]);

  const TimingData = Object.entries(details.timing).map(([day, timing]) => ({
    day,
    ...timing,
  }));
  return (
    <View style={DetailsStyle.mainContainer}>
      <Header header={[details.category, ' Details']} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={DetailsStyle.scrollView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('gallery');
          }}>
          <FlatList
            ref={flatListRef}
            data={details.headerImg}
            horizontal
            // pagingEnabled
            // snapToInterval={width}
            // decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={DetailsStyle.imageContainer}>
                <Image source={item} style={DetailsStyle.image} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />{' '}
        </TouchableOpacity>
        <View style={DetailsStyle.container}>
          <View style={DetailsStyle.subContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{gap: Scale(5)}}>
                <Image source={details.img} style={DetailsStyle.companyLogo} />
                <View style={DetailsStyle.companyName}>
                  <Text style={DetailsStyle.companyNameText}>
                    {details.name}
                  </Text>
                </View>
                <Text style={DetailsStyle.companyAddress}>
                  33-37 Wigston Road Leicester,LE2 5QF
                </Text>
              </View>
              <View style={DetailsStyle.statusContainer}>
                <View style={DetailsStyle.statusContainer}>
                  <Text
                    style={[
                      DetailsStyle.statusText,
                      {
                        backgroundColor:
                          details.status == 'Open' ? '#E9F9F5' : '#FCEDED',
                        color: details.status == 'Open' ? '#25C69F' : '#F04848',
                      },
                    ]}>
                    {details.status}
                  </Text>
                  {/* <Rating
                    // showRating
                    readonly
                    startingValue={4}
                    imageSize={14}
                    style={{}}
                  /> */}
                  <AirbnbRating
                    size={Scale(10)}
                    count={5}
                    defaultRating={4}
                    showRating={false}
                    isDisabled={true}
                  />
                </View>
                <View style={DetailsStyle.phoneMapContainer}>
                  <Image
                    source={require('../../../../assets/images/Phone.png')}
                    style={DetailsStyle.phoneMapImg}
                  />
                  <View style={DetailsStyle.mapContainer} />
                  <TouchableOpacity onPress={() => navigation.navigate('map')}>
                    <Image
                      source={require('../../../../assets/images/Map.png')}
                      style={DetailsStyle.phoneMapImg}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={DetailsStyle.subContainer}>
            <Text style={DetailsStyle.headerText}>Description</Text>
            <Text
              numberOfLines={expandedId ? 0 : 2}
              style={DetailsStyle.descText}>
              A Montessori environment that enables children to develop their
              potential to the fullest during the formative period..
            </Text>
            <TouchableOpacity onPress={toggleExpanded}>
              <Text style={DetailsStyle.readMoreText}>
                {expandedId ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={DetailsStyle.subContainer}>
            <View style={DetailsStyle.contactContainer}>
              <Profile
                name={'account'}
                size={Scale(20)}
                color={Colors.Primary}
                style={{alignSelf: 'flex-start'}}
              />
              <Text style={DetailsStyle.headerText}>Contact Person Name</Text>
            </View>
            <Text
              style={[
                DetailsStyle.descText,
                {
                  paddingHorizontal: Scale(5),
                },
              ]}>
              {details.contact}
            </Text>
          </View>
          {details.features && details.features.length > 0 && (
            <View style={DetailsStyle.featureContainer}>
              <View style={DetailsStyle.featureSubContainer}>
                <Feature
                  name={'star-outlined'}
                  size={Scale(20)}
                  color={Colors.Primary}
                  style={{alignSelf: 'flex-start'}}
                />
                <Text style={DetailsStyle.headerText}>Features</Text>
              </View>
              <View style={{paddingHorizontal: 20}}>
                {details.features.map((feature, index) => (
                  <Text key={index} style={DetailsStyle.descText}>
                    • {feature}
                  </Text>
                ))}
              </View>
            </View>
          )}
          {details.category !== 'Nannies' && details.category !== 'Tutors' && (
            <View style={DetailsStyle.featureContainer}>
              <View style={DetailsStyle.featureSubContainer}>
                <Timing
                  name={'clock'}
                  size={Scale(20)}
                  color={Colors.Primary}
                  style={{alignSelf: 'flex-start'}}
                />
                <Text style={DetailsStyle.headerText}>Timings</Text>
              </View>
              <View style={{paddingHorizontal: Scale(25)}}>
                <FlatList
                  data={TimingData}
                  renderItem={({item}) => {
                    return (
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            DetailsStyle.descText,
                            {width: Scale(50), color: Colors.Black},
                          ]}>
                          {item.day}
                        </Text>
                        <Text
                          style={[
                            DetailsStyle.descText,
                            {fontFamily: Fonts.Lexend_Medium},
                          ]}>
                          {item.time}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          )}

          {details.category !== 'Nannies' &&
            details.category !== 'Tutors' &&
            details.category !== 'Companies' && (
              <View
                style={[DetailsStyle.featureContainer, {padding: Scale(15)}]}>
                <View style={DetailsStyle.featureSubContainer}>
                  <Image
                    source={require('../../../../assets/images/Visiting.png')}
                    style={DetailsStyle.visitImg}
                  />
                  <Text style={DetailsStyle.headerText}>Visiting</Text>
                </View>
                <View style={{padding: Scale(7)}}>
                  <Text
                    style={[
                      DetailsStyle.descText,
                      {fontFamily: Fonts.Lexend_Medium},
                    ]}>
                    If you would like to request a tour of the Nursery, please
                    contact the nursery to book in a visit.
                  </Text>
                </View>
              </View>
            )}
          <View style={DetailsStyle.footerContainer}>
            <FlatList
              data={DetailsFooter}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(item.navigate, {
                        mode: 'detail',
                        data: item,
                      })
                    }
                    style={DetailsStyle.footerView}>
                    <View style={DetailsStyle.footerSubContainer}>
                      <Image
                        source={item.icon}
                        style={DetailsStyle.footerImg}
                      />
                      <Text style={DetailsStyle.headerText}>{item.name}</Text>
                    </View>

                    <Image
                      source={require('../../../../assets/images/Next.png')}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={DetailsStyle.buttonContainer}>
        <TouchableOpacity style={DetailsStyle.resetButton}>
          <Text style={DetailsStyle.resetButtonText}>Brochure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={DetailsStyle.applyButton}>
          <Text style={DetailsStyle.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
