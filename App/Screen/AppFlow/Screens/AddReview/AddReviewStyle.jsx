import { StyleSheet } from "react-native";
import {Colors} from '../../../../assets/Assests';

import Fonts from "../../../../assets/fonts/Fonts";
import Scale from "../../../AuthFlow/ResponsiveScreen";

export const AddReviewStyle = StyleSheet.create({
    container: {
      flex: 1,
      gap: Scale(10),
      backgroundColor: Colors.BackGroundColor,
    },
    scrollView: {
      backgroundColor: Colors.White,
      flex: 1,
    },
    featureItem: {
      backgroundColor: Colors.White,
      padding: Scale(10),
      marginHorizontal: Scale(15),
      borderBottomWidth: Scale(1),
      borderBottomColor: Colors.DarkGrey,
      gap: Scale(8),
    },
    featureItemContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: Scale(2),
    },
    featureTextContainer: {
      alignItems: 'flex-start',
      gap: Scale(8),
    },
    featureText: {
      fontFamily: Fonts.Lexend_Medium,
      color:Colors.Black,
      fontSize: Scale(14),
    },
    formContainer: {
      backgroundColor: Colors.BackGroundColor,
      padding: Scale(20),
      gap: Scale(15),
    },
    formGroup: {
      gap: Scale(8),
    },
    formLabel: {
      fontFamily: Fonts.Lexend_Medium,
      color: Colors.DarkGrey,
      fontSize:Scale(12)
    },
    textInput: {
      backgroundColor: Colors.White,
      fontFamily: Fonts.Lexend_Medium,
      fontSize:Scale(14),
      paddingHorizontal: Scale(10),
      borderRadius: Scale(12),
      // marginHorizontal: Scale(5),
    },
    dropdown: {
      padding: Scale(5),
      borderWidth: null,
      borderRadius: Scale(12),
      fontSize:Scale(12),
      paddingHorizontal: Scale(8),
      paddingVertical: Scale(12),
      backgroundColor: Colors.White,
    },
    textArea: {
      backgroundColor: Colors.White,
      fontFamily: Fonts.Lexend_Medium,
      fontSize:Scale(14),
      paddingHorizontal: Scale(10),
      // marginHorizontal: Scale(5),
      borderRadius: Scale(12),
      height: Scale(100),
      textAlignVertical: 'top',
    },
    submitContainer: {
      alignItems: 'center',
    },
    submitButton: {
      backgroundColor: Colors.Primary,
      paddingHorizontal: Scale(30),
      paddingVertical: Scale(10),
      borderRadius: Scale(13),
      marginTop: Scale(30),
    },
    submitButtonText: {
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