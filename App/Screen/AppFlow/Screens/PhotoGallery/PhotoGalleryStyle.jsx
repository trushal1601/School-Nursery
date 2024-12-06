import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const PhotoGalleryStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  listContent: {
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(10),
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    margin: Scale(10),
  },
  image: {
    width: Scale(163),
    resizeMode: 'cover',
    borderRadius: Scale(10),
  },
});
