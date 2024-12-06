import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/Colors";
import Fonts from "../../assets/fonts/Fonts";
import Scale from "../../Screen/AuthFlow/ResponsiveScreen";

export const EventHorizontalCardStyle = StyleSheet.create({
    container: {
      backgroundColor: Colors.BackGroundColor,
      flex: 1,
    },
    eventCard: {
      backgroundColor: Colors.White,
      margin: Scale(10),
      padding: Scale(15),
      marginHorizontal: Scale(15),
      borderRadius: Scale(19),
      flexDirection: 'row',
      alignItems: 'center',
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
    eventCompany: {
      fontFamily: Fonts.Lexend_Medium,
      color: Colors.DarkGrey,
    },
  });