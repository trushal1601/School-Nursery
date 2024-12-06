import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../../Components/Header';
import Colors from '../../../../assets/colors/Colors';
import Collapsible from 'react-native-collapsible';
import Fonts from '../../../../assets/fonts/Fonts';
import {FAQStyle} from './FAQStyle';

const FAQ = ({route}) => {
  const [expanded, setExpanded] = useState([]);
  const {data} = route.params;
  console.log(data);
  

  const toggleExpand = id => {
    setExpanded(
      expanded.includes(id)
        ? expanded.filter(item => item !== id)
        : [...expanded, id],
    );
  };

  const renderItem = ({item}) => {
    const isExpanded = expanded.includes(item.id);
    return (
      <View style={FAQStyle.faqContainer}>
        <TouchableOpacity
          onPress={() => toggleExpand(item.id)}
          style={FAQStyle.questionContainer}>
          <Text style={FAQStyle.questionText}>{item.question}</Text>
          <Image
            source={
              isExpanded
                ? require('../../../../assets/images/up-arrow.png')
                : require('../../../../assets/images/drop-down.png')
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
      <Header header={'FAQs'} />
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
