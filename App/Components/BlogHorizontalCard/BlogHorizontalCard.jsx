import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Fonts from '../../assets/fonts/Fonts';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';

export const BlogHorizontalCardStyle = StyleSheet.create({
  blogCard: {
    backgroundColor: Colors.White,
    margin: Scale(10),
    borderRadius: Scale(19),
    flex: 1,
    marginHorizontal: Scale(10),
    gap: Scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.2,
  },
  blogImage: {
    borderRadius: Scale(19),
    position: 'relative',
    height:Scale(100),
    width:Scale(100)
  },
  publishDateText: {
    color: Colors.Black,
    position: 'absolute',
    top: Scale(10),
    left: Scale(10),
    padding: 3,
    fontFamily: Fonts.Lexend_Medium,
    borderRadius: Scale(9),
    backgroundColor: Colors.White,
    alignSelf: 'flex-start',
    paddingHorizontal: Scale(7),
    fontSize: Scale(12),
  },
  textContainer: {
    flex: 0.7,
    paddingVertical: Scale(10),
    gap: Scale(10),
  },
  readTimeText: {
    alignSelf: 'flex-start',
    fontSize: Scale(12),
    color: Colors.DarkGrey,
    fontFamily: Fonts.Lexend_Medium,
  },
  headerText: {
    color: Colors.Black,
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
  },
});
