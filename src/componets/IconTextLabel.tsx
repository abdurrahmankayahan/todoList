import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

type Props={
    name?:string,
    size?:number,
    labelText: string,
    textLabelStyle?: TextStyle|TextStyle[],

}

const IconTextLabel:React.FC<Props> = (props) => {
  return (
    <View>
  <View style={{flexDirection:"row"}}>
                <Icon name={props.name!} size={props.size} />
                <Text style={[props.textLabelStyle,]}>{props.labelText}</Text>
            </View>
    </View>
  )
}

export default IconTextLabel

const styles = StyleSheet.create({})