import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const FAQStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
  },
  listContent: {
    padding: Scale(10),
  },
  faqContainer: {
    backgroundColor: Colors.White,
    marginVertical: Scale(8),
    borderRadius: Scale(10),
    padding: Scale(12),
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Black,
    paddingBottom: Scale(7),
    fontSize: Scale(14),
  },
  icon: {
    height: Scale(15),
    width: Scale(15),
  },
  answerContainer: {
    borderTopWidth: Scale(1),
    borderColor: Colors.DarkGrey,
    paddingTop: Scale(10),
  },
  answerText: {
    lineHeight: Scale(20),
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.DarkGrey,
  },
});
