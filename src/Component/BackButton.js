import { View } from 'native-base';
import React from 'react';
import {Image,TouchableOpacity,StyleSheet } from 'react-native';

function BackButton(){
    return(
        <TouchableOpacity>
            <Image source={require('../asserts/back_arrow.png')} style={styles.buttonStyle  }/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        margin:10
    }
}
)

export default BackButton;

