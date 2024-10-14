import { StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import IconTextLabel from './IconTextLabel'

interface Props extends TextInputProps{
    style?:ViewStyle|ViewStyle[],
    iconName?:string,
    iconSize?:number,
    labelText: string,
    textLabelStyle?: TextStyle,
    textInputStyle?: TextStyle,
    

}

const TextInputWithLabel: React.FC<Props> = (customprops,) => {
    return (
        <View style={[styles.container,customprops.style]} >
            <IconTextLabel name={customprops.iconName!} size={customprops.iconSize} labelText={customprops.labelText} textLabelStyle={[styles.textLabelStyle,customprops.textLabelStyle!]} />
            <TextInput {...customprops }
                style={styles.textInputStyle}
            />
        </View>
    )
}

export default TextInputWithLabel

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf:"center"
    },
    textInputStyle: {
        fontSize: 25,
        borderWidth: 1,
        borderRadius: 20,
        padding: 4,
    },
    textLabelStyle: {
        marginLeft: 8,
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 30,
        textAlign: "left",
        color: "black"

    }
})