import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import Colors from '../../../../assets/colors/Colors';
import Collapsible from 'react-native-collapsible';
import Fonts from '../../../../assets/fonts/Fonts';
import {FAQStyle} from './FAQStyle';
import Labels from '../../../../assets/Label/Labels';
import { Images } from '../../../../assets/images/Images';

const FAQ = ({route}) => {
  const [expanded, setExpanded] = useState(null);
  const {data} = route.params;

  const toggleExpand = id => {
    setExpanded(expanded === id ? null : id);
  };

  const renderItem = ({item}) => {
    const isExpanded = expanded === item.id;
    return (
      <View style={FAQStyle.faqContainer}>
        <TouchableOpacity
          onPress={() => toggleExpand(item.id)}
          style={FAQStyle.questionContainer}>
          <Text style={FAQStyle.questionText}>{item.question}</Text>
          <Image
            source={
              isExpanded
                ? Images.up_arrow
                : Images.down_arrow
            }
            style={FAQStyle.icon}
          />
        </TouchableOpacity>
        <Collapsible collapsed={!isExpanded}>
          <View style={FAQStyle.answerContainer}>
            <Text style={FAQStyle.answerText}>{item.answer}</Text>
          </View>
        </Collapsible>
      </View>
    );
  };

  return (
    <View style={FAQStyle.container}>
      <Header header={Labels.faq} />
      <FlatList
        data={data.date}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={FAQStyle.listContent}
      />
    </View>
  );
};

export default FAQ;
