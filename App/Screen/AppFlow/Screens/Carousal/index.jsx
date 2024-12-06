import React, {useRef, useState, useEffect} from 'react';
import {View, Text, FlatList, Dimensions, Image} from 'react-native';
import Fonts from '../../../../assets/fonts/Fonts';
import {SliderData} from '../../../../Components/JsonData/JsonData';
import {CarousalStyle} from './CarousalStyle';
import Scale from '../../../AuthFlow/ResponsiveScreen';

const {width: screenWidth} = Dimensions.get('window');

const data = [...SliderData, ...SliderData];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length;
        if (nextIndex === SliderData.length) {
          carouselRef.current.scrollToIndex({
            index: 0,
            animated: false,
          });
          return 1;
        } else {
          carouselRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({item}) => (
    <View
      style={[
        CarousalStyle.slide,
        {
          backgroundColor: item.bgColor,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
        },
      ]}>
      <Text
        style={[
          CarousalStyle.slideText,
          {width: Scale(150), fontFamily: Fonts.Lexend_Medium},
        ]}>
        {item.text}
      </Text>
      <Image
        source={item.img}
        style={{height: Scale(120), width: Scale(120)}}
      />
    </View>
  );

  return (
    <FlatList
      ref={carouselRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={screenWidth * Scale(0.8)}
      decelerationRate="fast"
      contentContainerStyle={CarousalStyle.carouselContainer}
      onScrollToIndexFailed={() => {}}
    />
  );
};

export default Carousel;