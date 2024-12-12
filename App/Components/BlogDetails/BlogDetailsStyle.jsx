import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/Assests';
import Fonts from '../../assets/fonts/Fonts';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';

export const BlogDetailsStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.BackGroundColor,
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: Scale(20),
    marginTop: Scale(20),
  },
  blogImage: {
    alignSelf: 'center',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: Scale(19),
    position: 'relative',
  },
  publishDateText: {
    position: 'absolute',
    backgroundColor: Colors.White,
    alignSelf: 'flex-start',
    padding: Scale(3),
    fontSize: Scale(12),
    paddingHorizontal: Scale(5),
    borderRadius: Scale(9),
    top: Scale(15),
    left: Scale(20),
    fontFamily: Fonts.Lexend_Medium,
  },
});
