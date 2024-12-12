import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Assests';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const TestimonialStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
  },
  testimonialCard: {
    backgroundColor: Colors.White,
    margin: Scale(10),
    borderRadius: Scale(19),
    padding: Scale(15),
  },
  nameText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Black,
    fontSize:Scale(16)
  },
  positionText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Grey,
    fontSize: Scale(12),
  },
  descriptionText: {
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
    marginTop: Scale(10),
    fontSize:Scale(14)
  },
});
