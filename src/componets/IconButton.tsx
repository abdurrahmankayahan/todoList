import { ButtonProps, Pressable, PressableProps, StyleSheet, Text, TextProps, View, ViewStyle } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { IconProps } from 'react-native-vector-icons/Icon'

interface props extends PressableProps {
style:ViewStyle,
    variant?: "Left" | "Right" | "Top" | "Bottom",
    text: string,
    textProps?: TextProps,
    iconProps: IconProps,
}

const IconButton: React.FC<props> = (props) => {
    return (
    
            <Pressable
            {...props}
            style={[styles.buttonStyle,props.style, { flexDirection: (props.variant === 'Top' || props.variant === "Bottom" ? "column" : "row") }]}
                >

                {props.variant != "Bottom" && props.variant != "Right" ?
                    <Icon {...props.iconProps} /> : null
                }
                <Text {...props.textProps} >{props.text}</Text>
                {props.variant === "Bottom" || props.variant === "Right" ?
                    <Icon {...props.iconProps} /> : null
                }

            </Pressable>

    
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
    
    },
    buttonStyle: {
        borderWidth: 1,
        borderRadius:20,
        padding:8,
        alignItems: "center",
        justifyContent: "center",

    }
})