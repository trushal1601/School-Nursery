import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import Fonts from '../../../../assets/fonts/Fonts';
import Scale from '../../../AuthFlow/ResponsiveScreen';

export const ViewAllStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.BackGroundColor,
    flex:1
  },
  header: {
    backgroundColor: Colors.Primary,
    padding: Scale(10),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: Scale(20),
    width: Scale(20),
  },
  headerTitle: {
    fontFamily: Fonts.Lexend_Medium,
    color: Colors.White,
    fontSize: Scale(20),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Scale(10),
  },
  searchBox: {
    marginTop: Scale(50),
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#a477e6',
    fontSize: Scale(14),
    fontFamily:Fonts.Lexend_Medium,
    paddingHorizontal: Scale(40),
    borderRadius: Scale(10),
    color: Colors.White,
    paddingVertical: Scale(10),
  },
  searchIcon: {
    width: Scale(22),
    height: Scale(22),
    position: 'absolute',
    top: '50%',
    left: Scale(10),
    transform: [{translateY: -11}],
  },
  filterButton: {
    backgroundColor: Colors.Star,
    padding: Scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Scale(10),
  },
  filterIcon: {
    height: Scale(20),
    width: Scale(20),
  },
  card: {
    backgroundColor: Colors.White,
    margin: Scale(10),
    padding: Scale(10),
    borderRadius: Scale(19),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    height: Scale(45),
    width: Scale(90),
    resizeMode: 'contain',
  },
  status: {
    padding: Scale(4),
    borderRadius: Scale(8),
    fontSize:Scale(12),
    alignSelf: 'flex-start',
  },
  statusOpen: {
    backgroundColor: '#E9F9F5',
    color: '#25C69F',
  },
  statusClosed: {
    backgroundColor: '#FCEDED',
    color: '#F04848',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {
    width: Scale(200),
  },
  name: {
    fontSize: Scale(16),
    fontFamily: Fonts.Lexend_Medium,
  },
  cardFooter: {
    marginTop: Scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  address: {
    width: Scale(170),
    fontFamily: Fonts.Lexend_Regular,
    color: Colors.DarkGrey,
    fontSize:Scale(12)
  },
  emailButton: {
    backgroundColor: Colors.Primary,
    borderRadius: Scale(5),
    paddingVertical: Scale(5),
  },
  emailText: {
    color: Colors.White,
    paddingHorizontal: Scale(5),
    fontFamily: Fonts.Lexend_Medium,
    textAlign: 'center',
    fontSize:Scale(12)
  },
});
