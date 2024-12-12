import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Assests';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const ViewMoreScreenStyle = StyleSheet.create({
  container: {
    gap: Scale(10),
    backgroundColor: Colors.BackGroundColor,
    // flex: 1,
    // height:'100%'
  },
  sectionContainer: {
    gap: Scale(10),
  },
  listContainer: {
    paddingHorizontal: Scale(15),
    backgroundColor: Colors.White,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Scale(13),
    borderBottomWidth: Scale(0.5),
    borderColor: Colors.Grey,
    // padding: Scale(10),
    gap: Scale(20),
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
  },
  nextIcon: {
    height: Scale(14),
    width: Scale(14),
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Scale(10),
    marginTop: Scale(60),
  },
  socialIcon: {
    height: Scale(35),
    width: Scale(35),
  },
  footer: {
    marginTop: Scale(15),
    marginBottom: Scale(30),
    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: Colors.DarkGrey,
    fontFamily: Fonts.Lexend_Medium,
  },
});
