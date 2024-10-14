import { View, Text, FlatList, Pressable, ViewStyle, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'


interface Props {
    style?:ViewStyle
    data: any[]
    selectedList?:  React.Dispatch<React.SetStateAction<any>>

}


const ListUser: React.FC<Props> = (props) => {

    const [isSelectable, setIsSelectable] = useState(false)
    const [selectedItems, setSelectedItems] = useState<any[]>([])
    const [isRefresh, setIsRefresh] = useState(false)

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
        props.selectedList!(selectedItems)
    }, [selectedItems])

    return (
        <View style={[styles.container,props.style]}>
            <FlatList
                data={props.data}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }: any) =>
                (

                    <Pressable
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
                                //navigation.navigate("Todo", { item })
                            }


                            setIsRefresh(!isRefresh)

                        }}>

                        <UserItem style={{ backgroundColor: (selectedItems.findIndex(selectedItem => selectedItem.id === item.id)) !== -1 ? "#0000FF" : "#FFFFFF" }}
                            text={item.email}
                            title={item.firstName + " " + item.lastName}
                        />
                    </Pressable>

                )




                }

            />

        </View>
    )
}

export default ListUser


const styles = StyleSheet.create({
    container: {
        height:"90%"
    },
    selectedView: {
        width: "100%",
        backgroundColor: "#0000ff55",

    }
})