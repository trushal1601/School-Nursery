import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../assets/Assests';
import Fonts from '../../assets/fonts/Fonts';
import {useNavigation} from '@react-navigation/native';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';
import {Images} from '../../assets/Assests';

const Header = ({header, showBack = true, showClose}) => {
  const navigation = useNavigation();
  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };
  return (
    <View>
      <StatusBar backgroundColor={Colors.Primary} />
      <View
        style={{
          backgroundColor: Colors.Primary,
          padding: Scale(10),
          // paddingHorizontal: Scale(15),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {showBack ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={getImageSource(Images.back_icon)}
                style={{height: Scale(20), width: Scale(20)}}
                tintColor={Colors.White}
              />
            </TouchableOpacity>
          ) : (
            <View style={{width: Scale(20)}} />
          )}
          <Text
            style={{
              fontFamily: Fonts.Lexend_Medium,
              color: Colors.White,
              fontSize: Scale(20),
            }}
            numberOfLines={1}>
            {header}
          </Text>
          {showClose ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={getImageSource(Images.close_icon)}
                style={{height: Scale(25), width: Scale(25)}}
                tintColor={Colors.White}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
