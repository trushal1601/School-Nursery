import {Dimensions, StyleSheet} from 'react-native';
import Scale from '../../../AuthFlow/ResponsiveScreen';

const {width: screenWidth} = Dimensions.get('window');

export const CarousalStyle = StyleSheet.create({
  carouselContainer: {
    paddingHorizontal: (screenWidth - screenWidth * 0.8) / 2,
    marginVertical: 20,
  },
  slide: {
    width: screenWidth * 0.9,
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginHorizontal: 20,
    height:Scale(150)
  },
  slideText: {
    fontSize: Scale(18),
  },
});
