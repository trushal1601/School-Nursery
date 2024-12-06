import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const HomeScreenStyles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.BackGroundColor,
    flex:1,
  },
  headerContainer: {
    backgroundColor: Colors.Primary,
    padding: Scale(23),
    borderBottomRightRadius: Scale(30),
    borderBottomLeftRadius: Scale(30),
  },
  greetingText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.White,
    fontSize: Scale(14),
  },
  welcomeText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.White,
    fontSize: Scale(18),
  },
  titleText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.White,
    fontSize: Scale(18),
  },
  searchContainer: {
    marginTop: Scale(20),
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#a477e6',
    fontSize: Scale(12),
    paddingHorizontal: Scale(40),
    borderRadius: Scale(8),
    color: Colors.White,
  },
  searchIcon: {
    width: Scale(22),
    height: Scale(22),
    position: 'absolute',
    top: '50%',
    left: Scale(10),
    transform: [{translateY: Scale(-11)}],
  },
  sliderItem: {
    paddingHorizontal: Scale(10),
  },
  contentContainer: {
    // paddingHorizontal: Scale(10),
  },
});
