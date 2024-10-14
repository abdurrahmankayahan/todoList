import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import IconButton from './IconButton'

export enum priority {
    Low = '#4CAF50',          // Yeşil (Düşük öncelik)
    MediumLow = '#FFEB3B',   // Sarı (Orta-Düşük öncelik)
    Medium = '#FFC107',       // Sarı-Ton (Orta öncelik)
    MediumHigh = '#FF9800',   // Turuncu (Orta-Yüksek öncelik)
    High = '#F44336',         // Kırmızı (Yüksek öncelik)
}

export const priorityList=[
    {
        title:"Low", 
        value:'#4CAF50',
    },         
    {
        title:"MediumLow", 
        value:'#FFEB3B',
    }, 
    {
        title:"Medium", 
        value:'#FFC107',
    },       
    {
        title:"MediumHigh", 
        value:'#FF9800',
    },  
    {
        title:"High", 
        value:'#F44336',
    },     
]

export enum status {
    Redirected = "Yönlendirildi",
    Waiting = "Bekliyor",
    Paused = "Duraklatıldı",
    InProgress = "Yapılıyor",
    Completed = "Tamamlandı",
}

export const statusList = [
    {
        title: "Redirected",
        value: "Yönlendirildi",
    },
    {
        title: "Waiting",
        value: "Bekliyor",
    },
    {
        title: "Paused",
        value: "Duraklatıldı",
    },
    {
        title: "InProgress",
        value: "Yapılıyor",
    },
    {
        title: "Completed",
        value: "Tamamlandı",
    },
];


export type TodoType={
    title:string,
    tag:string,
    text:string,
    status:status    
    date:number
    priority:priority|string
}

interface Props extends PressableProps{
todo:TodoType
}


const TodoItem:React.FC<Props> = (props) => {
    return (
        <Pressable {...props}
        style={[styles.container,{backgroundColor:props.todo.priority+"55"}]}   >
            <View style={{flex:1}}>

            <View style={[styles.header,{backgroundColor:props.todo.priority}]}>
                <Text style={{ flex: 2, textAlign: "center", borderWidth: 1 }} >{props.todo.title}</Text>
                <Text style={{ flex: 1, textAlign: "center", borderWidth: 1 }}>{props.todo.tag}</Text>
            </View>

            <View style={styles.body}>
                <Text style={{ flex: 1, textAlign: "center",  }} >{props.todo.text}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={{ flex: 1, textAlign: "center", borderWidth: 1 }} >{props.todo.status}</Text>
                <Text style={{ flex: 1, textAlign: "center", borderWidth: 1 }}>{new Date(props.todo.date).toDateString()}</Text>

            </View>
                
            </View>
            
            

        </Pressable>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems:"center",
        minHeight: 100,
        borderBottomWidth:3,


    },
    header: {
        flexDirection: "row"

    },
    body: {
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
        
    },
    footer: {
        flexDirection: "row"
    }
})