import { StyleSheet } from "react-native";
import Colors from "../../../../assets/colors/Colors";
import Fonts from "../../../../assets/fonts/Fonts";
import Scale from "../../../AuthFlow/ResponsiveScreen";

export const ContactUsStyle = StyleSheet.create({
    container: {
      backgroundColor: Colors.BackGroundColor,
      flex: 1,
    },
    formContainer: {
      padding: Scale(20),
      gap: Scale(15),
    },
    formGroup: {
      gap: Scale(8),
    },
    label: {
      fontFamily: Fonts.Lexend_Medium,
      color: Colors.DarkGrey,
      fontSize:Scale(14)
    },
    input: {
      backgroundColor: Colors.White,
      fontFamily: Fonts.Lexend_Medium,
      paddingHorizontal: Scale(10),
      // marginHorizontal: Scale(5),
      borderRadius:Scale(12),
      fontSize:Scale(12)
    },
    dropdown: {
      fontFamily:Fonts.Lexend_Medium,
      // padding: Scale(5),
      paddingHorizontal: Scale(10),
      // marginHorizontal: Scale(5),
      borderWidth: null,
      borderRadius: Scale(14),
      paddingHorizontal: Scale(8),
      paddingVertical: Scale(12),
      backgroundColor: Colors.White,
    },
    textArea: {
      backgroundColor: Colors.White,
      fontFamily: Fonts.Lexend_Medium,
      paddingHorizontal: Scale(10),
      // marginHorizontal: Scale(5),
      height: Scale(150),
      fontSize:Scale(12),
      textAlignVertical: 'top',
      borderRadius:Scale(14)
    },
    buttonContainer: {
      alignItems: 'center',
    },
    button: {
      backgroundColor: Colors.Primary,
      paddingHorizontal: Scale(30),
      paddingVertical: Scale(10),
      padding: Scale(10),
      borderRadius: Scale(13),
      marginTop: Scale(30),
    },
    buttonText: {
      color: Colors.White,
      textAlign: 'center',
      fontSize: Scale(16),
      fontFamily: Fonts.Lexend_Medium,
    },
    errorText: {
      color: 'red',
      fontSize: Scale(12),
      fontFamily: Fonts.Lexend_Regular,
    },
  });