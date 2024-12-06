import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, style, navigationTarget}) => {
  return (
    <View>
       <TouchableOpacity
         onPress={() => {
            onPress ? onPress() : navigationTarget && navigation.navigate(navigationTarget);
          }}
        >
          <Text style={style}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})