import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconTextLabel from './IconTextLabel'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'
import { priority, priorityList } from './TodoItem'


interface Props {
    data: [] | any[]
    style?: ViewStyle
    labelText: string
    iconProps?: IconProps
    textLabelStyle?: TextStyle
    changeSelectedItem?:React.Dispatch<React.SetStateAction<any>>
    renderItem?: ListRenderItem<any> | null | undefined
    value?: any
}

const PriorityList: React.FC<Props> = (props) => {

    const [box, setBox] = useState(false)
    const [selectedItem, setSelectedItem] = useState({ title: "", value: "" })


    useEffect(() => {
        props.value ? (
            setSelectedItem(props.data.filter((val) => val.value === props.value)[0])
        ) : null;
    }, [props.value])


    useEffect(() => {
        props.changeSelectedItem? props.changeSelectedItem(selectedItem.value):null
    }, [selectedItem])

    return (
        <View style={[styles.container, props.style]} >
            <IconTextLabel
                name={props.iconProps?.name}
                size={props.iconProps?.size}
                labelText={props.labelText}
                textLabelStyle={[styles.textLabelStyle, props.textLabelStyle!]} />

            <Pressable
                onPress={() => {
                    setBox(!box)
                }}>
                <View style={[styles.viewStyle, { backgroundColor: selectedItem.value }]} >

                    <Text style={[styles.selectText]}>{selectedItem.title ? selectedItem.title : "Birini Secin"}</Text>


                    <Icon name={box ? 'caret-up' : 'caret-down'} size={30} />

                </View>
            </Pressable>


            {box ?
                <FlatList
                    style={styles.listViewStyle}
                    data={props.data}
                    keyExtractor={(item) => item.title}
                    renderItem={
                        props.renderItem ?
                            props.renderItem :
                            ({ item }: any) => (
                                <View style={styles.itemStyle}>
                                    <Pressable onPress={() => {
                                        setSelectedItem(item)
                                        setBox(false)
                                    }}>

                                        <View style={{ backgroundColor: item.priority, width: "100%", height: 30 }}>
                                            <Text style={[styles.selectText, { backgroundColor: item.value }]}>{item.title}</Text>
                                        </View>

                                    </Pressable>
                                </View>
                            )}
                />
                : null}


        </View>
    )
}

export default PriorityList

const styles = StyleSheet.create({

    container: {
        width: "90%",
        alignSelf:"center"
    },
    textLabelStyle: {
        marginLeft: 8,
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 30,
        textAlign: "left",
        color: "black"
    },
    viewStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 20,
        padding: 4,


    },
    selectText: {
        textAlign: "center",
        flex: 1
    },
    itemStyle: {
        borderWidth: 1,
        marginVertical: 2
    },
    listViewStyle: {
        alignSelf: "center",
        borderWidth: 1,
        paddingVertical: 8,
        padding: 8,
        width: "80%",
        height: "20%",

    }

})