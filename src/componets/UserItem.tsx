import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


interface Props {

    title: string,
    text: string,

}



const UserItem: React.FC<Props> = (props) => {
    const initials = props.title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
    
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Icon style={{position:"absolute"}} name="person" size={40} color={"#33333333"}/>
                <Text style={{textAlign:"center", fontSize:25,}}>{initials}</Text>
            </View>
            <View style={styles.contentView}>
                <Text style={{fontWeight:"bold", fontSize:25}} >{props.title}</Text>
                <Text style={{fontStyle:"italic", fontSize:20, color:"gray"}} >{props.text}</Text>

            </View>
        </View>
    )
}

export default UserItem

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        borderWidth:1,
        alignItems:"center",
        padding:8
    },
    imageView: {
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        width:60,
        height:60,
        borderRadius:20,
        padding:4,
        marginRight:8
    },
    contentView: {

    }



})