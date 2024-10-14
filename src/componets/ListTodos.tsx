import { View, Text, FlatList, Pressable, StyleSheet, ScrollView, ViewStyle } from 'react-native'
import React, { Ref, useEffect, useState } from 'react'
import UserItem from './UserItem'
import TodoItem, { priority } from './TodoItem'
import TodoScreen from '../screens/TodoScreen'
import { useNavigation } from '@react-navigation/native'


interface Props {
    style?: ViewStyle
    data: any[]
    selectedList?: React.Dispatch<React.SetStateAction<any>>


}



const ListTodos: React.FC<Props> = (props) => {


    const [isSelectable, setIsSelectable] = useState(false)
    const [selectedItems, setSelectedItems] = useState<any[]>([])
    const [isRefresh, setIsRefresh] = useState(false)
    const navigation: any = useNavigation();

    const selected = async (item: any) => {

        const index = selectedItems.findIndex(selectedItem => selectedItem.id === item.id);

        if (index !== -1) {
            // Eğer item dizide varsa, sil
            if (selectedItems.length === 1)
                setIsSelectable(false)

            setSelectedItems((selectedItems.filter(selectedItem => selectedItem.id !== item.id)!));


        } else {
            // Eğer item dizide yoksa, ekle
            selectedItems.push(item);
        }



    }

    useEffect(() => {
        props.selectedList ? props.selectedList(selectedItems) : null
    }, [selectedItems])


    return (
        <View style={[styles.container, props.style]}>

            <FlatList
                refreshing={isRefresh}
                data={props.data}
                renderItem={({ item }: any) => (

                    <TodoItem
                        todo={{
                            title: item.title,
                            text: item.text,
                            tag: item.tag,
                            priority: (selectedItems.findIndex(selectedItem => selectedItem.id === item.id)) !== -1 ? "#0000FF" : item.priority,
                            status: item.status,
                            date: item.date,
                        }

                        }


                        onLongPress={() => {

                            setIsSelectable(true)
                            selected(item)
                            setIsRefresh(!isRefresh)


                        }}
                        onPress={() => {

                            if (isSelectable) {
                                selected(item)
                            }
                            else {
                                navigation.navigate("Todo", { item })
                            }


                            setIsRefresh(!isRefresh)

                        }}


                    />


                )}
            />





        </View>
    )
}

export default ListTodos



const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    selectedView: {
        width: "100%",
        backgroundColor: "#0000ff55",

    }
})