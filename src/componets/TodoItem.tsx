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

interface Props extends PressableProps{

    title:string,
    tag:string,
    text:string,
    status:"Yönlendirildi"|"Bekliyor"|"Duraklatıldı"|"Yapılıyor"|"Tamamlandı"|"",    
    date:number
    priority:priority|string



}


const TodoItem:React.FC<Props> = (props) => {
    return (
        <Pressable {...props}
        style={[styles.container,{backgroundColor:props.priority+"55"}]}
        
        >
            <View style={{flex:1}}>

            <View style={[styles.header,{backgroundColor:props.priority}]}>
                <Text style={{ flex: 2, textAlign: "center", borderWidth: 1 }} >{props.title}</Text>
                <Text style={{ flex: 1, textAlign: "center", borderWidth: 1 }}>{props.tag}</Text>
            </View>

            <View style={styles.body}>
                <Text style={{ flex: 1, textAlign: "center",  }} >{props.text}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={{ flex: 1, textAlign: "center", borderWidth: 1 }} >{props.status}</Text>
                <Text style={{ flex: 1, textAlign: "center", borderWidth: 1 }}>{new Date(props.date).toDateString()}</Text>

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