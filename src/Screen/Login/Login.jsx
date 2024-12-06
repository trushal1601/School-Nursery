import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/5191079.jpg';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.imgView}>
        <Image source={Logo} style={styles.img} />
      </View>
      <View style={styles.container}>
        <View style={styles.textInputView}>
          <View style={styles.textView}>
            <View style={styles.heroMain}>
              <Text style={styles.textStyle}>Email</Text>
              <View style={styles.mainContainer}>
                <TextInput
                  placeholder="Enter Your Email"
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textInputView}>
          <View style={styles.textView}>
            <View style={styles.heroMain}>
              <Text style={styles.textStyle}>Password</Text>
              <View style={styles.mainContainer}>
                <TextInput
                  placeholder="Enter Your Password"
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
        <TouchableOpacity style={styles.touchable} onPress={()=> navigation.navigate('home')}>
          <Text style={styles.touchableText}>SignIn</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.footerAlready}>Don't have Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.navigate}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {flex: 1, paddingVertical: 50, backgroundColor: 'white'},
  imgView: {justifyContent: 'center', alignItems: 'center'},
  img: {height: 290, width: '90%'},
  container: {marginHorizontal: 20, marginVertical: 60},
  textInputView: {paddingTop: 10, paddingHorizontal: 20},
  textView: {paddingTop: 20},
  heroMain: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    padding: 8,
    position: 'relative',
  },
  textStyle: {
    position: 'absolute',
    top: -12,
    right: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#4B5563',
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {paddingLeft: 5, fontSize: 16},
  textInput: {flex: 1, fontSize: 18, paddingLeft: 6},
  touchable: {
    marginTop: 50,
    backgroundColor: '#53b3fc',
    padding: 10,
    borderRadius: 49,
  },
  touchableText: {textAlign: 'center', fontSize: 22, color: 'white'},
  footerAlready: {textAlign: 'center', fontSize: 20},
  navigate: {fontSize: 18, color: '#53b3fc', textAlign: 'center'},
});

