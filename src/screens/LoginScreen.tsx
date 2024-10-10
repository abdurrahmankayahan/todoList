import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TextInputWithLabel from '../componets/TextInputWithLabel'
import IconButton from '../componets/IconButton'
import Icon from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {

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
        text='Giriş'
        textProps={{ style: { fontSize: 20 } }}
        iconProps={{
          name: "log-in",
          size: 30,
          color: "green"
        }}
        onPress={() => {
          console.log(eMail + "-" + password)
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