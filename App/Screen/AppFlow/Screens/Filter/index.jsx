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
import Fonts from '../../../../assets/fonts/Fonts';
import {FilterData} from '../../../../Components/JsonData/JsonData';
import {FilterStyle} from './FilterStyles';
import Labels from '../../../../assets/Label/Labels';

const Filter = ({navigation}) => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = id => {
    setCheckedItems(prevState => ({...prevState, [id]: !prevState[id]}));
  };

  const handleApply = () => {
    // const selectedItems = Object.keys(checkedItems)
    //   .filter(key => checkedItems[key])
    //   .map(id => data.find(item => item.id === parseInt(id)).name);
    // console.log('Selected Items:', selectedItems);
    navigation.goBack();
  };

  const renderItem = ({item}) => (
    <View style={FilterStyle.itemContainer}>
      <Text style={FilterStyle.itemText}>{item.name}</Text>
      <TouchableOpacity onPress={() => toggleItem(item.id)}>
        {checkedItems[item.id] ? (
          <Image
            style={FilterStyle.checkbox}
            source={require('../../../../assets/images/Checked.png')}
          />
        ) : (
          <Image
            style={FilterStyle.checkbox}
            source={require('../../../../assets/images/square.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={FilterStyle.container}>
      <Header header={Labels.filter} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={FilterStyle.scrollView}>
        <View style={FilterStyle.listContainer}>
          <FlatList data={FilterData} renderItem={renderItem} />
        </View>
      </ScrollView>
      <View style={FilterStyle.buttonContainer}>
        <TouchableOpacity style={FilterStyle.resetButton}>
          <Text style={FilterStyle.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={FilterStyle.applyButton} onPress={handleApply}>
          <Text style={FilterStyle.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
