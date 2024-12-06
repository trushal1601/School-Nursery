import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';
import { HomeScreenCompoStyle } from './HomeScreenCompoStyle';

export const HorizontalScroll = ({data, firstText}) => {
  const navigation = useNavigation();
  const RenderNursery = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('details', {
            details: item,
          })
        }
        style={HomeScreenCompoStyle.horizontalItemContainer}>
        <Image source={item.img} style={HomeScreenCompoStyle.horizontalItemImage} />
        <View style={HomeScreenCompoStyle.horizontalItemTextContainer}>
          <Text style={HomeScreenCompoStyle.horizontalItemName}>{item.name}</Text>
        </View>
        <Text
          style={[
            HomeScreenCompoStyle.horizontalItemStatus,
            item.status === 'Open' ? HomeScreenCompoStyle.statusOpen : HomeScreenCompoStyle.statusClosed,
          ]}>
          {item.status}
        </Text>
        <View style={HomeScreenCompoStyle.horizontalItemIconsContainer}>
          <Image
            source={require('../../assets/images/Phone.png')}
            style={HomeScreenCompoStyle.icon}
          />
          <View style={HomeScreenCompoStyle.divider} />
          <Image
            source={require('../../assets/images/Map.png')}
            style={HomeScreenCompoStyle.icon}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={HomeScreenCompoStyle.headerContainer}>
        <Text style={HomeScreenCompoStyle.headerText}>{firstText}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('viewAll', {
              state: data,
            });
          }}>
          <Text style={HomeScreenCompoStyle.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={RenderNursery}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export const VerticalScroll = ({data, firstText}) => {
  const navigation = useNavigation();

  const RenderNurseryGroup = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
        { 
         navigation.navigate('details', {
            details: item,
          })
        }
        }
        style={HomeScreenCompoStyle.verticalItemContainer}>
        <View style={HomeScreenCompoStyle.verticalItemHeader}>
          <Image source={item.img} style={HomeScreenCompoStyle.verticalItemImage} />
          <Text
            style={[
              HomeScreenCompoStyle.verticalItemStatus,
              item.status === 'Open' ? HomeScreenCompoStyle.statusOpen : HomeScreenCompoStyle.statusClosed,
            ]}>
            {item.status}
          </Text>
        </View>
        <View style={HomeScreenCompoStyle.verticalItemContent}>
          <View style={HomeScreenCompoStyle.verticalItemTextContainer}>
            <Text style={HomeScreenCompoStyle.verticalItemName}>{item.name}</Text>
          </View>
          <View style={HomeScreenCompoStyle.verticalItemIconsContainer}>
            <Image
              source={require('../../assets/images/Phone.png')}
              style={HomeScreenCompoStyle.icon}
            />
            <View style={HomeScreenCompoStyle.dividerVertical} />
            <Image
              source={require('../../assets/images/Map.png')}
              style={HomeScreenCompoStyle.icon}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={HomeScreenCompoStyle.headerContainer}>
        <Text style={HomeScreenCompoStyle.headerText}>{firstText}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('viewAll', {
              state: data,
            })
          }>
          <Text style={HomeScreenCompoStyle.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={RenderNurseryGroup}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};



export default VerticalScroll;