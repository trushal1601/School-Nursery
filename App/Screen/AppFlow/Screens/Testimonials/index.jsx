import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../../Components/Header';
import {TestimonialStyle} from './TestimonialStyle';
import Labels from '../../../../assets/Label/Labels';

const Testimonials = ({route}) => {
  const {data} = route.params;
  return (
    <View style={TestimonialStyle.container}>
      <Header header={Labels.testimonials} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.data}
          renderItem={({item}) => {
            return (
              <View style={TestimonialStyle.testimonialCard}>
                <Text style={TestimonialStyle.nameText}>{item.name}</Text>
                <Text style={TestimonialStyle.positionText}>
                  {item.position}
                </Text>
                <Text style={TestimonialStyle.descriptionText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta facilis officia ullam aliquid iure non tempora.
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Testimonials;
