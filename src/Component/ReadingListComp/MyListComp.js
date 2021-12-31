import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { appColors } from '../../Utils/appColors'

const MyListComp = ({image,title,books,views,followers,shareImage,share_text}) => {

    return(
        <View style={styles.container}>
            <Image style = {styles.imagestyle} source={image}/>
            <View style={{margin:10}}>
                <Text style={styles.textStyle}>{title}</Text>
                <View style={styles.container}>
                    <Text>{books} Books</Text>
                    <Text style={{marginHorizontal:10}}>{views} Views</Text>
                    <Text style={{marginHorizontal:10}}>{followers} Followers</Text>
                </View>
                <View style={styles.share_style}>
                    <Image style={{width:15,height:15}} source={shareImage}/>
                    <Text style={{color:appColors.primary,fontWeight:'bold'}}> {share_text} </Text>
                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10
    },
    shareStyle:{
        flexDirection:'row'
    },
    share_style:{
        flexDirection:'row',
        backgroundColor:appColors.lightGray,
        padding:5,
        width:80,
        alignItems:'center',
        borderRadius:5
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

export default MyListComp;