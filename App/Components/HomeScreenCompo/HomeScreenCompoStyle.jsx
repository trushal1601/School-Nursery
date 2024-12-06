import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Fonts from '../../assets/fonts/Fonts';
import Scale from '../../Screen/AuthFlow/ResponsiveScreen';

export const HomeScreenCompoStyle = StyleSheet.create({
  // Common styles
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Scale(13),
    marginTop: Scale(10),
  },
  headerText: {
    fontSize: Scale(16),
    fontFamily: Fonts.Lexend_SemiBold,
  },
  viewAllText: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.Primary,
    // textDecorationLine: 'underline',
  },
  icon: {
    height: Scale(18),
    width: Scale(18),
  },
  divider: {
    borderLeftWidth: Scale(0.5),
    borderColor: '#93A4BF',
  },
  dividerVertical: {
    borderLeftWidth: Scale(1),
    borderColor: '#93A4BF',
    height: Scale(20),
  },
  statusOpen: {
    backgroundColor: '#E9F9F5',
    color: '#25C69F',
  },
  statusClosed: {
    backgroundColor: '#FCEDED',
    color: '#F04848',
  },
  // Horizontal Scroll styles
  horizontalItemContainer: {
    backgroundColor: Colors.White,
    padding: Scale(10),
    marginTop: Scale(10),
    // marginHorizontal: Scale(12),
    margin: Scale(10),
    borderRadius: Scale(15),
    width: Scale(150),
    paddingHorizontal: Scale(15),
  },
  horizontalItemImage: {
    height: Scale(40),
    width: Scale(40),
    resizeMode: 'contain',
  },
  horizontalItemTextContainer: {
    width: Scale(120),
  },
  horizontalItemName: {
    fontSize: Scale(14),
    height: Scale(55),
    fontFamily: Fonts.Lexend_Medium,
  },
  horizontalItemStatus: {
    padding: Scale(4),
    fontFamily: Fonts.Lexend_Medium,
    paddingHorizontal: Scale(5),
    fontSize: Scale(12),
    borderRadius: Scale(8),
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  horizontalItemIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: Scale(0.5),
    borderColor: '#93A4BF',
    padding: Scale(10),
    marginTop: Scale(10),
  },
  // Vertical Scroll styles
  verticalItemContainer: {
    backgroundColor: Colors.White,
    margin: Scale(8),
    marginHorizontal: Scale(12),
    padding: Scale(10),
    borderRadius: Scale(19),
  },
  verticalItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Scale(10),
  },
  verticalItemImage: {
    height: Scale(45),
    width: Scale(120),
    resizeMode: 'contain',
  },
  verticalItemStatus: {
    padding: Scale(4),
    paddingHorizontal: Scale(5),
    borderRadius: Scale(8),
    fontFamily: Fonts.Lexend_Medium,
    fontSize: Scale(12),
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  verticalItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalItemTextContainer: {
    width: Scale(200),
  },
  verticalItemName: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
  },
  verticalItemIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Scale(10),
  },
});
