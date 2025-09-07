import IonIcons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'
import React from 'react'
import { COLORS } from '@/constant/theme'

export default function TabLayout() {
  return (
    <Tabs
     screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.grey,
      tabBarStyle:{
        backgroundColor: "black",
        position: "absolute",
        elevation: 0,
        borderTopWidth: 0,
        height: 40,
        paddingBottom: 8,
      },
     }}
    >
      <Tabs.Screen name='index' 
      options={{
        tabBarIcon:({color, size}) => (
          <IonIcons name="home" color={color} size={size} />
        )
      }}
      />
      <Tabs.Screen name='bookmark' 
      options={{
        tabBarIcon:({color, size}) => (
          <IonIcons name="bookmark" color={color} size={size} />
        )
      }}
      />
      <Tabs.Screen name='create' 
      options={{
        tabBarIcon:({color, size}) => (
          <IonIcons name="add-circle" color={COLORS.primary} size={size} />
        )
      }}
      />
      <Tabs.Screen name='notification' 
      options={{
        tabBarIcon:({color, size}) => (
          <IonIcons name="notifications" color={color} size={size} />
        )
      }}
      />
      <Tabs.Screen name='profile' 
      options={{
        tabBarIcon:({color, size}) => (
          <IonIcons name="person" color={color} size={size} />
        )
      }}
      />

    </Tabs>
  )
}