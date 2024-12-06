import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EventHorizontalCard from '../../../../Components/EventHorizontalCard'

const NewsEvent = ({route}) => {
  const {data} = route.params;
  return (
    <EventHorizontalCard data={data}/>

  )
}

export default NewsEvent

const styles = StyleSheet.create({})