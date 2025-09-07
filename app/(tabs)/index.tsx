import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/styles/feed.style'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Home Page</Text>
    </View>
  )
}