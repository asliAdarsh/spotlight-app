import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/auth.style'
import { useAuth } from '@clerk/clerk-expo'

export default function Profile() {

  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}> 
        <Text style={{color: 'white'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}