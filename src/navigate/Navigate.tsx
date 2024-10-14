import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthPages from './AuthPages'
import Pages from './Pages'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useUserstore, { UserType } from '../zustand/User'



const Navigate = () => {

    const [isAuth, setIsAuth] = useState(false)
    const user:UserType = useUserstore()


    useEffect(() => {

        const getItem = async () => {
            await AsyncStorage.getItem("User")
                .then(val => JSON.parse(val!.toString()))
                .then(val => useUserstore.setState({ id: val.id, name: val.name, eMail: val.eMail, password: val.password, auth: val.auth }))

        }
        getItem();
    }, [])


    return (
        <NavigationContainer>


            {user.auth ?
                <AuthPages />
                :
                <Pages />
            }

        </NavigationContainer>

    )
}

export default Navigate

const styles = StyleSheet.create({})