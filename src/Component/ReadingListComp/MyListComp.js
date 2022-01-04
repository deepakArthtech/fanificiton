import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { flex } from 'styled-system'
import COLORS from '../../color/Colors'
import { appColors } from '../../Utils/appColors'

const MyListComp = ({image,title,books,views,followers,shareImage,share_text}) => {

    return(
        <View style={styles.container}>
            <Image style = {{height:80,width:80}} source={image}/>
            <View style={{flex:1, marginStart:16}}>
                <Text style={ {top:0, fontSize:14,fontWeight:'bold', color:appColors.black,}}>{title}</Text>
                <View style={{flexDirection:'row', marginTop:4}}>
                    <Text>{books} Books</Text>
                    <Text style={{marginLeft:10}}>{views} Views</Text>
                    <Text style={{marginLeft:10}}>{followers} Followers</Text>
                </View>
                <View style={styles.share_style}>
                    <Image style={{width:15,height:15}} source={shareImage}/>
                    <Text style={{color:appColors.primary,fontWeight:'bold', marginLeft:4}}> {share_text} </Text>
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
        backgroundColor:COLORS.lightGray,
        paddingVertical:5,
        paddingHorizontal:12,
        alignItems:'center',
        borderRadius:5,
        bottom:0,
        position: 'absolute', 
        alignSelf:'baseline',
    },
    textStyle:{
        fontSize:14,
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
    
})

export default MyListComp;