import { Pressable, PressableProps, StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'


interface props extends PressableProps {
    title: string,
    textProps?: TextProps


}


const TextButton: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <Pressable {...props}>
                <Text {...props.textProps}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default TextButton




const styles = StyleSheet.create({
container:{

}

})