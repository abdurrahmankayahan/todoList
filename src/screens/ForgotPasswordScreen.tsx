import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import TextInputWithLabel from '../componets/TextInputWithLabel'
import IconButton from '../componets/IconButton'
import { APIHostName } from './LoginScreen'

const ForgotPasswordScreen = () => {
  const [eMail, setEMail] = useState("")
  const [password, setPassword] = useState("")

  const [authCode, setAuthCode] = useState(false)
  const [timeOut, setTimeOut] = useState(10)





  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (authCode && timeOut > 0) {
      timer = setInterval(() => {
        setTimeOut(prev => prev - 1);
      }, 1000);
    } else if (timeOut === 0) {
      setAuthCode(false)
      setTimeOut(10)
    }

    return () => clearInterval(timer);

  }, [authCode, timeOut]);



  return (


    <View style={styles.container}>

      <Icon style={{ marginBottom: 16 }} name='key-outline' size={60} color={"darkgreen"} />
      <TextInputWithLabel
        style={{ marginVertical: 4 }}
        iconName="mail"
        iconSize={30}
        labelText='E-posta'
        onChangeText={setEMail}
        placeholder='E-Posta Giriniz..'
      />

      {authCode ? <TextInputWithLabel
        style={{ marginVertical: 4 }}
        iconName='key'
        iconSize={30}
        labelText='Kod'
        onChangeText={setPassword}
        placeholder={authCode ? "Kod Giriniz.." + timeOut.toString() : "Kod Giriniz.."}
        secureTextEntry={true} /> : null}


      <IconButton
        style={{ marginTop: 8 }}
        variant="Right"
        text={!authCode ? "Kod Al" : "Kodu Gir"}
        textProps={{ style: { fontSize: 20 } }}
        iconProps={{
          name: authCode ? "log-in" : "keypad",
          size: 30,
          color: "green"
        }}
        onPress={() => {
          if (!authCode) {

            setAuthCode(true)
            fetch(APIHostName + "/authCode", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({ eMail, code: "123321" })
            })

          }
          else {




          }

          console.log("kod:" + authCode)
        }}
      />


    </View>


  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

  },

})