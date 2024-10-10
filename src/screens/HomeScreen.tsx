import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem, { priority } from '../componets/TodoItem'
import UserItem from '../componets/UserItem'

const HomeScreen = () => {


    return (
        <View>

            <UserItem title='Abdurrahman Kayahan' text='posts@deneme.com'></UserItem>




            {/* <TodoItem
            priority={priority.Medium}
                title="Title"
                tag='Mutfak'
                text='lkndlkjnasdflkjnadlfkjnasldkfjalkdfnjlakjdnfakjndflkajsdnlskjakjndfakjdfnaklsjdnkljfnkajndsflkjnasdfjnks'
                status="Bekliyor"
                date={Date.now()} />
                   <TodoItem
            priority={priority.Low}
                title="Title"
                tag='Mutfak'
                text='lkndlkjnasdflkjnadlfkjnasldkfjalkdfnjlakjdnfakjndflkajsdnlskjakjndfakjdfnaklsjdnkljfnkajndsflkjnasdfjnks'
                status="Bekliyor"
                date={Date.now()} />
                   <TodoItem
            priority={priority.High}
                title="Title"
                tag='Mutfak'
                text='lkndlkjnasdflkjnadlfkjnasldkfjalkdfnjlakjdnfakjndflkajsdnlskjakjndfakjdfnaklsjdnkljfnkajndsflkjnasdfjnks'
                status="Bekliyor"
                date={Date.now()} /> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})