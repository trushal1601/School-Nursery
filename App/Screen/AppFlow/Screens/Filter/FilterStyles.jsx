import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const FilterStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackGroundColor,
  },
  scrollView: {
    marginBottom: Scale(70),
  },
  listContainer: {
    marginVertical: Scale(10),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderBottomWidth: Scale(1),
    borderColor: Colors.Grey,
    padding: Scale(7),
    paddingVertical: Scale(10),
    paddingHorizontal: Scale(10),
  },
  itemText: {
    fontFamily: Fonts.Lexend_Medium,
    fontSize: Scale(14),
  },
  checkbox: {
    height: Scale(27),
    width: Scale(27),
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: Scale(15),
    gap: Scale(7),
    backgroundColor: Colors.White,
    position: 'absolute',
    bottom: Scale(0),
    width: '100%',
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
  },
});
