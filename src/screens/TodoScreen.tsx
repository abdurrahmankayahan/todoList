import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInputWithLabel from '../componets/TextInputWithLabel'
import ListBox from '../componets/ListBox'
import { priority, priorityList, statusList, TodoType } from '../componets/TodoItem';
import DatePicker from 'react-native-date-picker';
import PriorityList from '../componets/PriorityListBox';
import IconButton from '../componets/IconButton';



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





const TodoScreen = ({ route,navigation }: any) => {

    
    const [date, setDate] = useState(Date.now())
    const [todo, setTodo] = useState<any>()

    useEffect(()=>{
        setTodo(route.params?.item);
    },[route.params!])


    return (
        <View style={[styles.container,{backgroundColor:todo?todo.priority+"55":"lightblue"}]}>

            <ScrollView style={{ width: "90%" }}>

                <TextInputWithLabel
                    labelText='Başlık'
                    iconName="pencil"
                    iconSize={30}
                    value={todo?.title}
                    onChangeText={(val)=>(setTodo({...todo,title:val}))}
                />
                <TextInputWithLabel
                    labelText='Etiket'
                    iconName="pricetag"
                    iconSize={30}
                    value={todo?.tag}
                    onChangeText={(val)=>(setTodo({...todo,tag:val}))}

                />

                <TextInputWithLabel
                    multiline={true}
                    labelText='İçerik'
                    iconName="newspaper"
                    iconSize={30}
                    value={todo?.text}
                    onChangeText={(val)=>(setTodo({...todo,text:val}))}
                />


                <PriorityList
                    labelText='Öncelik'
                    iconProps={{ name: "podium", size: 30 }}
                    data={priorityList}
                    value={todo?.priority}
                    changeSelectedItem={(val)=>setTodo({...todo,priority:val})}
                    

                />
                <ListBox
                    data={statusList}
                    iconProps={{ name: "flag", size: 30 }}
                    labelText='Durum'
                    value={todo?.status}
                    

                />
                {/* <TextInputWithLabel
                    multiline={true}
                    labelText='Durum'
                    iconName="flag"
                    iconSize={30}
                    value={route.text}
                /> */}


                <DatePicker

                    date={new Date(todo?.date?todo.date:date)}
                    onConfirm={(date) => {
                        setDate(Number(date.toUTCString()))
                    }}
                    onCancel={() => {

                    }}
                />
                <View style={styles.buttonContainer}>

                    <IconButton style={{ flex: 1, marginRight: 4 }}
                        iconProps={{ name: "close", size: 30 }}
                        text='İptal'
                        onPress={()=>{
                            navigation.goBack()
                        }} />

                    <IconButton style={{ flex: 1, marginLeft: 4 }}
                        iconProps={{ name: "save", size: 30 }}
                        text='kaydet' />

                </View>
            </ScrollView>


            {/* <TextInputWithLabel labelText='Text' iconName="home" iconSize={30} />
      <TextInputWithLabel labelText='Status' iconName="home" iconSize={30} />
      <TextInputWithLabel labelText='Date' iconName="home" iconSize={30} /> */}


        </View>
    )
}

export default TodoScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
        flex: 1
    },
    buttonContainer: {
        justifyContent: "space-between",
        flexDirection: "row"
    }
})