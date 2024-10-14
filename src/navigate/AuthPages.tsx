import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import TodoScreen from '../screens/TodoScreen'
import UsersScreen from '../screens/UsersScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab=createBottomTabNavigator()
const AuthPages = () => {

  return (
    <Tab.Navigator initialRouteName='Login' screenOptions={({route})=>({
      
      tabBarIcon: ({ focused, color, size }) => {

        let iconName;


        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        }
        else if (route.name === "Users") {
          iconName = focused ? "people" : "people-outline";
        }
        else if (route.name === "Todo") {
          iconName = focused ? "checkbox" : "checkbox-outline";
        }
        else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        }




        return <Icon name={iconName!} size={size} color={color} />
      }

    }
  )
    
  }>

      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Users" component={UsersScreen}/>
      <Tab.Screen name="Todo" component={TodoScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>

      
  </Tab.Navigator>
  )
}

export default AuthPages

const styles = StyleSheet.create({})