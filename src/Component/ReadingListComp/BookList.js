import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { paddingRight } from 'styled-system'
import { appColors } from '../../Utils/appColors'

const BookList = ({image,title,books,followers}) => {

    return(
        <View style={styles.container}>
            <Image style = {styles.imagestyle} source={image}/>
            <View style={{paddingTop:4, paddingLeft:16}}>
                <Text style={styles.textStyle}>{title}</Text>
                <View style={{flexDirection:'row', marginTop:4}}>
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
        margin:8,
        paddingRight:16,
    },
    textStyle:{
        fontSize:14,
        fontWeight:'bold',
        color:appColors.black,
    },
    readTextStyle:{
        color:appColors.white,
        backgroundColor:appColors.primary,
        paddingVertical:4,
        textAlign:'center',
        marginTop:4,
        marginLeft:4,
        alignSelf:'baseline',
        paddingHorizontal:28,
        borderRadius:24,
        bottom:0,
    },
    imagestyle:{
        height:79,
        width:79,
        borderRadius:4,
    }
})

export default BookList;