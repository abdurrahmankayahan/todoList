import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthPages from './AuthPages'
import Pages from './Pages'
import { NavigationContainer } from '@react-navigation/native'


const Navigate = () => {

    const [isAuth, setIsAuth] = useState(false)

    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>


            {isAuth ?
                <AuthPages/>
                :
                <Pages/>
            }

        </NavigationContainer>

    )
}

export default Navigate

const styles = StyleSheet.create({})