import { Center } from 'native-base';
import React from 'react';
import {Image,TouchableOpacity,StyleSheet } from 'react-native';
import COLORS from '../color/Colors';

function RoundImage(){
    return(
        <TouchableOpacity  >
            <Image source={require('../assests/icons/user.png')} style={styles.imagestyle} resizeMode={'cover'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  
    imagestyle:{
         
        height:80,
        width:80,
        top:16,
        borderWidth: 1  ,
        borderRadius: 75,
        alignSelf:'center',
        borderColor: COLORS.white,
         
    }
})

export default RoundImage;