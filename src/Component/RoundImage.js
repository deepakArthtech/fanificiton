import { Center } from 'native-base';
import React from 'react';
import {Image,TouchableOpacity,StyleSheet } from 'react-native';

function RoundImage(){
    return(
        <TouchableOpacity style={styles.round_image}>
            <Image source={require('../asserts/joker.png')} style={styles.imagestyle}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    round_image:{
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:80,
        borderRadius:40,
        borderWidth:1,
    },
    imagestyle:{
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:80,
        borderRadius:40,
    }
})

export default RoundImage;