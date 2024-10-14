import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../componets/IconButton'
import TextInputWithLabel from '../componets/TextInputWithLabel'
import Icon from 'react-native-vector-icons/Ionicons'
import { APIHostName } from './LoginScreen'

const SignupScreen = ({ navigation }: any) => {

  const [eMail, setEMail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")



  return (

    <View style={styles.container}>

      <Icon style={{ marginBottom: 16 }} name='person-add' size={60} color={"darkgreen"} />
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

      <TextInputWithLabel
        style={{ marginVertical: 4 }}
        iconName='key'
        iconSize={30}
        labelText='Şifre(Tekrar)'
        onChangeText={setRePassword}
        placeholder='Şifre Giriniz..'
        secureTextEntry={true} />

      <IconButton
        style={{ marginTop: 8 }}
        variant="Right"
        text='Kaydol'
        textProps={{ style: { fontSize: 20 } }}
        iconProps={{
          name: "arrow-forward",
          size: 30,
          color: "green"
        }}
        onPress={() => {


          fetch((APIHostName + "/users"), {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({ name: eMail.split('@')[0], eMail, password })
          })
            .then(val => val.status === 200 ? navigation.navigate("Login") : console.error("Kullanıcı oluşturulamadi"))



          console.log(eMail + "-" + password)
        }}
      />


    </View>


  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

  },

})