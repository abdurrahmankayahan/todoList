import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInputWithLabel from '../componets/TextInputWithLabel'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconButton from '../componets/IconButton'
import Icon from 'react-native-vector-icons/Ionicons'
import useUserstore, { UserType } from '../zustand/User'
import { APIHostName } from './LoginScreen'




const ProfileScreen = () => {

    const [user, setUser] = useState<UserType>()


    useEffect(() => {

        const getData = async () => {
            await AsyncStorage.getItem("User")
                .then(val => JSON.parse(val!.toString()))
                .then(val => setUser(val))
        }
        getData()




    }, [])

    return (
        <View style={styles.container}>


            <Icon style={{ marginBottom: 16, alignSelf: "center" }} name='person' size={60} color={"blue"} />


            <TextInputWithLabel labelText='Kullanıcı Adı'
                placeholder={user?.name}
                onChangeText={val =>

                    setUser((prv) => ({
                        ...prv!,
                        name: val,
                    }))


                } />

            <TextInputWithLabel labelText='E-Posta'
                placeholder={user?.eMail}
                onChangeText={val =>
                    setUser((prv) => ({
                        ...prv!,
                        name: val,
                    }))} />

            <TextInputWithLabel labelText='Şifre'
                secureTextEntry={true}
                placeholder={"*".repeat(user?.password?.length!)}
                onChangeText={val =>
                    setUser((prv) => ({
                        ...prv!,
                        name: val,
                    }))
                } />

            <View style={styles.buttonContainer}>

                <IconButton style={styles.button} text='Save'
                    iconProps={{ name: "save", size: 30 }}
                    onPress={() => {


                        fetch(APIHostName + `/users${user?.id}`, {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(user)
                        })
                    }}
                />

                <IconButton style={styles.button} text='Çıkış Yap'
                    iconProps={{ name: "log-out", size: 30, color: "red" }}
                    onPress={async () => {
                        useUserstore.setState({ auth: false })
                        await AsyncStorage.setItem("User", "")

                    }}
                />

            </View>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
    },
    buttonContainer: {
        marginTop: "10%",
        alignItems: "center",

    },
    button: {
        marginVertical: 4,
        width: "70%"
    }
})