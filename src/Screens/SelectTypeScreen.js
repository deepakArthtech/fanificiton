import React from 'react';
import { View, Text, Button,StyleSheet,Image, TextInput, TouchableOpacity,ImageBackground } from 'react-native';

function SelectTypeScreen({ navigation }){

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../asserts/blur_bg.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.textStyle}>Choose a type</Text>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Image source={require('../asserts/male_novel.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Image source={require('../asserts/female_novel.png')}/>
                </TouchableOpacity>
                </View>    
            </ImageBackground>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'flex-start',
        marginLeft:20
    }
  });

export default SelectTypeScreen;