import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const SearchScreenStyle = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.BackGroundColor,
  },
  headerContainer: {
    backgroundColor: Colors.Primary,
    padding: Scale(10),
  },
  headerText: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.White,
    fontSize: Scale(20),
    textAlign: 'center',
  },
  searchSection: {
    padding: Scale(10),
  },
  searchInput: {
    backgroundColor: Colors.White,
    fontSize: Scale(14),
    position: 'relative',
    fontFamily: Fonts.Lexend_Medium,
    paddingHorizontal: Scale(40),
    borderRadius: Scale(12),
  },
  searchIcon: {
    width: Scale(22),
    height: Scale(22),
    position: 'absolute',
    top: '50%',
    left: Scale(10),
    transform: [{translateY: Scale(-11)}],
  },
  dropdown: {
    marginTop: Scale(10),
    padding: Scale(5),
    borderWidth: null,
    borderRadius: Scale(12),
    paddingHorizontal: Scale(8),
    paddingVertical: Scale(12),
    backgroundColor: Colors.White,
  },
  searchButtonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: Scale(30),
    paddingVertical: Scale(10),
    padding: Scale(10),
    borderRadius: Scale(13),
    marginTop: Scale(30),
  },
  searchButtonText: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: Scale(16),
    fontFamily: Fonts.Lexend_Medium,
  },
  searchImageContainer: {
    alignItems: 'center',
    marginTop: Scale(150),
    // justifyContent:'center'
  },
  searchImage: {
    height: Scale(200),
    width: Scale(200),
  },
  searchContainer: {
    flex: 1,
  },
});
