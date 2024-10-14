import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListUser from '../componets/ListUser'
import IconButton from '../componets/IconButton'

const UsersScreen = () => {

    const [users, setUsers] = useState([])
    const [selectedItems, setSelectedItems] = useState<any[]>([])


    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(v => setUsers(v.users));

    }, [])



    return (
        <View>

            <ListUser
            
                data={users}
                selectedList={(val)=>setSelectedItems(val)}
            />
            <IconButton
                onPress={() => {
                    console.log(selectedItems)
                }}
                text='Deneme'
                iconProps={
                    {
                        name: "home",
                        size: 30
                    }
                }
            />

        </View>


    )
}

export default UsersScreen

const styles = StyleSheet.create({



})