import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Assests';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const ReviewStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: Scale(15),
    backgroundColor: Colors.BackGroundColor,
  },
  reviewItem: {
    backgroundColor: Colors.White,
    padding: Scale(10),
    borderBottomWidth: Scale(1),
    borderBottomColor: Colors.DarkGrey,
    gap: Scale(8),
  },
  reviewHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Scale(10),
  },
  reviewTitleContainer: {
    alignItems: 'flex-start',
    gap: Scale(8),
  },
  reviewTitle: {
    fontFamily: Fonts.Lexend_Medium,
    fontSize: Scale(16),
  },
  reviewDate: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Grey,
    fontSize:Scale(12)
  },
  reviewContent: {
    paddingHorizontal: Scale(10),
  },
  reviewText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.DarkGrey,
    lineHeight: Scale(20),
    fontSize:Scale(14)
  },
  toggleText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Primary,
    fontSize:Scale(12)
  },
  addButton: {
    position: 'absolute',
    bottom: Scale(20),
    right: Scale(0),
    height: Scale(75),
    width: Scale(75),
  },
});
