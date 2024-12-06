import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import logo from '../../assets/Logo1.png';
import back from '../../assets/back.png';
import saved from '../../assets/saved.png';
import notification from '../../assets/notification.png';

const Details = ({navigation, route}) => {
  const {news} = route.params;
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo1} />
        <Image source={notification} style={styles.icon} />
      </View>
      <View style={{margin: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Image source={back} style={{height: 20, width: 20}} />
            <Text style={{fontSize: 20}}>GoBack!</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Image source={saved} style={{height: 25, width: 25}} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
        <Image style={{height:199,width:'100%',borderRadius:19,marginTop:20}} source={news.image}/>
        <Text style={{fontSize:24,fontWeight:'500',paddingVertical:10}}>{news.title}</Text>
        <Text>{news.publish_date}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainView: {flex: 1},
  header: {
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  logo1: {
    height: 90,
    width: 160,
    resizeMode: 'contain',
  },
  icon: {
    height: 25,
    width: 25,
  },
});
