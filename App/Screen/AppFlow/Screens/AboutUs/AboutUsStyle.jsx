import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Assests';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const AboutUsStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.BackGroundColor,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.White,
    padding: Scale(15),
    marginVertical: Scale(10),
    paddingHorizontal: Scale(20),
    flex: 1,
  },
  paragraph: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.DarkGrey,
    lineHeight: Scale(22),
    fontSize:Scale(14)
  },
  secondParagraph: {
    marginTop: Scale(20),
  },
});
