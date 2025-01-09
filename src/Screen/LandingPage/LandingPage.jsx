import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../assets/Logo1.png';
import fb from '../../assets/facebook.png';
import google from '../../assets/google.png';

const LandingPage = ({navigation}) => {
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.imgView}>
        <Image source={Logo} style={styles.img} />
      </View>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>
          Welcome! Let's dive into Your Account!
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.continue}>
          <Image source={fb} style={styles.logo} />
          <Text style={styles.continueText}>Continue With Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continue}>
          <Image source={google} style={styles.logo} />
          <Text style={styles.continueText}>Continue With Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.or}>
        <Text style={styles.orText}>OR</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          style={styles.touchable}>
          <Text style={styles.touchableText}>Sign in with Password</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText1}>Don't have an Account?</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('signup');
              }}>
              <Text style={styles.footerText2}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  mainView: {flex: 1, paddingVertical: 100, backgroundColor: 'white'},
  imgView: {justifyContent: 'center', alignItems: 'center'},
  img: {height: 90, width: '83%'},
  welcomeView: {marginTop: 80},
  welcomeText: {textAlign: 'center', fontSize: 20},
  continue: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 25,
    borderRadius: 49,
    padding: 5,
  },
  logo: {height: 40, width: 40},
  continueText: {fontSize: 20},
  or: {
    borderTopWidth: 1,
    marginTop: 100,
    position: 'relative',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  orText: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'white',
    top: -15,
    fontSize: 20,
    zIndex: 1,
    paddingHorizontal: 25,
  },
  touchable: {
    margin: 30,
    marginTop: 50,
    backgroundColor: '#53b3fc',
    padding: 15,
    borderRadius: 49,
  },
  touchableText: {textAlign: 'center', fontSize: 22, color: 'white'},
  footer: {display: 'flex', alignItems: 'center', justifyContent: 'center'},
  footerText1: {fontSize: 20},
  footerText2: {fontSize: 18, color: '#53b3fc'},
});
