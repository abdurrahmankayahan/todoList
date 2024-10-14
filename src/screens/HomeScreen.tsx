import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TodoItem, { priority } from '../componets/TodoItem'
import UserItem from '../componets/UserItem'
import ListUser from '../componets/ListUser'
import ListTodos from '../componets/ListTodos'
import IconButton from '../componets/IconButton'

const HomeScreen = () => {

    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])
    const [selectedItems, setSelectedItems] = useState<any[]>([])


    // fetch('https://dummyjson.com/users')
    // .then(res => res.json())
    // .then(v=>setUsers(v.users));

    // fetch('https://dummyjson.com/todos')
    // .then(res => res.json())
    // .then(v=>setTodos(v.todos));


    const dummyData = [
        {
            id: 1,
            title: "Giriş ekranı tasarımı",
            tag: "UI",
            text: "Giriş ekranı tasarımının revize edilmesi gerekiyor.",
            status: "Yapılıyor",
            date: 1696963200000, // 11 Ekim 2023
            priority: priority.High
        },
        {
            id: 2,
            title: "Veritabanı optimizasyonu",
            tag: "Backend",
            text: "FireStore sorguları optimize edilecek.",
            status: "Bekliyor",
            date: 1697049600000, // 12 Ekim 2023
            priority: priority.Medium
        },
        {
            id: 3,
            title: "Harita güncellemeleri",
            tag: "Map",
            text: "Yeni marker ve polygon özellikleri eklenecek.",
            status: "Duraklatıldı",
            date: 1697136000000, // 13 Ekim 2023
            priority: priority.MediumLow
        },
        {
            id: 4,
            title: "Kullanıcı geri bildirimleri",
            tag: "Feedback",
            text: "Uygulama geri bildirim formu eklenecek.",
            status: "Yönlendirildi",
            date: 1697222400000, // 14 Ekim 2023
            priority: priority.Low
        },
        {
            id: 5,
            title: "Login hata düzeltmeleri",
            tag: "Authentication",
            text: "Giriş yaparken oluşan hatalar çözülecek.",
            status: "Tamamlandı",
            date: 1697308800000, // 15 Ekim 2023
            priority: priority.MediumHigh
        }
    ];

    return (
        <View>
            <ListTodos
          
            data={dummyData}
                selectedList={setSelectedItems}

            />
            {/* <IconButton
            onPress={()=>{
                console.log(selectedItems)
            }}
                text='Deneme'
                iconProps={
                    {
                        name: "home",
                        size: 30
                    }
                }
            /> */}
            

            {/* <ListUser data={users} ></ListUser> */}





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