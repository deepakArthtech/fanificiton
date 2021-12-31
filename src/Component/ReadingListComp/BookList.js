import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { appColors } from '../../Utils/appColors'

const BookList = ({image,title,books,followers}) => {

    return(
        <View style={styles.container}>
            <Image style = {styles.imagestyle} source={image}/>
            <View style={{margin:10}}>
                <Text style={styles.textStyle}>{title}</Text>
                <View style={styles.container}>
                    <Text>{books} Books</Text>
                    <Text style={{marginHorizontal:10}}>{followers} Followers</Text>
                </View>
                <Text style={styles.readTextStyle}>Read</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10
    },
    textStyle:{
        fontSize:14,
        marginStart:10,
        fontWeight:'bold',
        color:appColors.black,
    },
    readTextStyle:{
        color:appColors.white,
        backgroundColor:appColors.primary,
        paddingVertical:5,
        textAlign:'center',
        width:100,
        borderRadius:30
    },
    imagestyle:{
        height:100,
        width:100,
        borderRadius:10,
    }
})

export default BookList;