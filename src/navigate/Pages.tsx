import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import Icon from "react-native-vector-icons/Ionicons"

const Pages = () => {
    const Tab=createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName='Login' screenOptions={({route})=>({
      
        tabBarIcon: ({ focused, color, size }) => {

          let iconName;


          if (route.name === "Login") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          }
          else if (route.name === "Signup") {
            iconName = focused ? "home" : "home-outline";
          }
          else if (route.name === "ForgotPassword") {
            iconName = focused ? "person" : "person-outline";
          }





          return <Icon name={iconName!} size={size} color={color} />
        }

      }
    )
      
    }>

        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name='Signup' component={SignupScreen}/>
        <Tab.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
        
    </Tab.Navigator>
   
  )
}

export default Pages

const styles = StyleSheet.create({})