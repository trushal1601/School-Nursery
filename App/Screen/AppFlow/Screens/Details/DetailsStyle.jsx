import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Assests';
import Scale from '../../../AuthFlow/ResponsiveScreen';
import Fonts from '../../../../assets/fonts/Fonts';

const {width} = Dimensions.get('window');

export const DetailsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
  },
  scrollView: {marginBottom: Scale(70)},
  imageContainer: {width, alignItems: 'center', justifyContent: 'center'},
  image: {width: '100%', resizeMode: 'cover'},
  container: {gap: Scale(5)},
  subContainer: {
    backgroundColor: Colors.White,
    padding: Scale(10),
    paddingHorizontal: Scale(15),
  },
  companyLogo: {
    height: Scale(50),
    width: Scale(50),
    resizeMode: 'contain',
  },
  companyName: {width: Scale(200)},
  companyNameText: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Medium,
  },
  companyAddress: {
    width: Scale(170),
    fontSize: Scale(12),
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
  },
  statusContainer: {gap: Scale(20)},
  statusText: {
    padding: Scale(4),
    paddingHorizontal: Scale(8),
    fontFamily:Fonts.Lexend_Medium,
    borderRadius: Scale(8),
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  phoneMapContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    gap: Scale(10),
  },
  phoneMapImg: {
    height: Scale(16),
    width: Scale(16),
    resizeMode: 'contain',
  },
  mapContainer: {
    borderLeftWidth: Scale(1),
    borderColor: '#93A4BF',
    height: Scale(20),
  },
  headerText: {fontSize: Scale(16), fontFamily: Fonts.Lexend_Medium},
  descText: {
    fontSize: Scale(14),
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
  },
  readMoreText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Primary,
    fontSize: Scale(12),
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Scale(10),
  },
  contactPerson: {
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
    fontSize: Scale(14),
  },
  featureContainer: {
    backgroundColor: Colors.White,
    padding: Scale(10),
    paddingHorizontal: Scale(15),
  },
  featureSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Scale(10),
  },
  visitImg: {
    alignSelf: 'flex-start',
    height: Scale(27),
    width: Scale(27),
  },
  footerContainer: {
    paddingHorizontal: Scale(15),
    backgroundColor: Colors.White,
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: Scale(0.5),
    padding: Scale(10),
    justifyContent: 'space-between',
  },
  footerSubContainer: {
    alignSelf: 'flex-start',
    gap: Scale(20),
    flexDirection: 'row',
  },
  footerImg: {height: Scale(20), width: Scale(20)},
  buttonContainer: {
    flexDirection: 'row',
    padding: Scale(15),
    gap: Scale(7),
    backgroundColor: Colors.White,
    position: 'absolute',
    bottom: Scale(0),
    width: '100%',
     // Android shadow
     elevation: 30,
     // iOS shadow
     shadowColor: '#000',
     shadowOffset: {width: 0, height: -2},
     shadowOpacity: 0.1,
     shadowRadius: 10,
  },
  resetButton: {
    backgroundColor: Colors.White,
    padding: Scale(10),
    width: '50%',
    borderWidth: Scale(2),
    borderColor: Colors.Primary,
    borderRadius: Scale(10),
  },
  resetButtonText: {
    textAlign: 'center',
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.Primary,
    fontSize: Scale(12),
  },
  applyButton: {
    backgroundColor: Colors.Primary,
    padding: Scale(10),
    width: '50%',
    borderWidth: Scale(2),
    borderColor: Colors.Primary,
    borderRadius: Scale(10),
  },
  applyButtonText: {
    textAlign: 'center',
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.White,
    fontSize: Scale(12),
  },
});
