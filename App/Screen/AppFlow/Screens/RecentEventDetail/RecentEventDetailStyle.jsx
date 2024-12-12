import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Assests';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const RecentEventDetailStyle = StyleSheet.create({
  scrollContainer: {
    paddingBottom: Scale(20),
  },
  eventCard: {
    backgroundColor: Colors.White,
    padding: Scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 5,
  },
  eventImage: {
    borderRadius: Scale(19),
  },
  textContainer: {
    flex: 1,
    gap: Scale(10),
  },
  eventDate: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9F9F5',
    color: '#25C69F',
    borderRadius: Scale(9),
    fontSize: Scale(10),
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(5),
    fontFamily: Fonts.Lexend_Medium,
  },
  eventHeader: {
    alignSelf: 'flex-start',
    fontFamily: Fonts.Lexend_SemiBold,
    fontSize: Scale(16),
  },
  section: {
    backgroundColor: Colors.White,
    padding: Scale(10),
    paddingHorizontal: Scale(15),
    marginBottom: Scale(5),
    // flexDirection:'row'
  },
  sectionTitle: {
    fontSize: Scale(16),
    fontFamily: Fonts.Lexend_Medium,
  },
  descriptionText: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
  },
  toggleText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Primary,
    fontSize: Scale(12),
  },
  eventByContainer: {
    borderBottomWidth: Scale(1),
    paddingVertical: Scale(5),
    // flexDirection: 'row',
    // alignItems: 'center',
    gap: Scale(5),
  },
  eventByText: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
  },
  eventByCompany: {
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
    fontSize: Scale(12),
  },
  detailItem: {
    borderBottomWidth: Scale(1),
    paddingVertical: Scale(8),
    borderBottomColor: Colors.DarkGrey,
  },
  detailHeader: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
  },
  detailText: {
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
    fontSize: Scale(12),
  },
});
