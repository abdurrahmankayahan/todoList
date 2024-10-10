import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import Icon from "react-native-vector-icons/Ionicons"
import HomeScreen from '../screens/HomeScreen'

const Pages = () => {
    const Tab=createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName='Login' screenOptions={({route})=>({
      
        tabBarIcon: ({ focused, color, size }) => {

          let iconName;


          if (route.name === "Login") {
            iconName = focused ? "log-in" : "log-in-outline";
          }
          else if (route.name === "Signup") {
            iconName = focused ? "person-add" : "person-add-outline";
          }
          else if (route.name === "ForgotPassword") {
            iconName = focused ? "key" : "key-outline";
          }





          return <Icon name={iconName!} size={size} color={color} />
        }

      }
    )
      
    }>

        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name="Signup" component={SignupScreen}/>
        <Tab.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Tab.Screen name="Home" component={HomeScreen}/>
        
    </Tab.Navigator>
   
  )
}

export default Pages

const styles = StyleSheet.create({})