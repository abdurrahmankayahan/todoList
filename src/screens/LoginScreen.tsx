import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TextInputWithLabel from '../componets/TextInputWithLabel'
import IconButton from '../componets/IconButton'
import Icon from 'react-native-vector-icons/Ionicons'
import TextButton from '../componets/TextButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserstore from '../zustand/User'


export const APIHostName = `http://localhost:${3000}`

const LoginScreen = ({ navigation }: any) => {

  const [eMail, setEMail] = useState("")
  const [password, setPassword] = useState("")



  return (


    <View style={styles.container}>

      <Icon style={{ marginBottom: 16 }} name='lock-open' size={60} color={"darkgreen"} />
      <TextInputWithLabel
        style={{ marginVertical: 4 }}
        iconName="mail"
        iconSize={30}
        labelText='E-posta'
        onChangeText={setEMail}
        placeholder='E-Posta Giriniz..'
      />

      <TextInputWithLabel
        style={{ marginVertical: 4 }}
        iconName='key'
        iconSize={30}
        labelText='Şifre'
        onChangeText={setPassword}
        placeholder='Şifre Giriniz..'
        secureTextEntry={true} />


      <IconButton
        style={{ marginTop: 8 }}
        variant="Right"
        text='Giriş Yap'
        textProps={{ style: { fontSize: 20 } }}
        iconProps={{
          name: "log-in",
          size: 30,
          color: "green"
        }}
        onPress={() => {
          console.log(eMail + "-" + password)
          console.log(JSON.stringify({ eMail, password }))


          fetch(APIHostName + "/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ eMail, password }),
          })
            .then(val => val.json())
            .then(async val => {
              console.log(val)
              val ? (
                useUserstore.setState({id:val.id,name:val.name,eMail:val.eMail,password:val.password,auth:true}),
                await AsyncStorage.setItem('User', JSON.stringify({ ...val, auth: true })),
                console.log("Giriş Başarılı Hoşgeldiniz " + val.name)) : null
            }




            )



        }}
      />
      <IconButton
        style={{ marginTop: 8 }}
        variant="Right"
        text='Kaydol'
        textProps={{ style: { fontSize: 20 } }}
        iconProps={{
          name: "person-add",
          size: 25,
          color: "green"
        }}
        onPress={() => {

          navigation.navigate("Signup")

        }}
      />
      <TextButton
        style={{ marginTop: 8 }}
        textProps={{ style: { fontSize: 20, color: "gray" } }}
        title='Şifremi Unuttum'
        onPress={() => {
          navigation.navigate("ForgotPassword")
        }}
      />


    </View>


  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

  },

})