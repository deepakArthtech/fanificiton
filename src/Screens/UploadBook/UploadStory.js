import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-paper'
import CloudUpload from '../../asserts/svgIcons/CloudUpload'
import PenIcon from '../../asserts/svgIcons/PenIcon'
import Container from '../../Component/Container'
import CustomHeader from '../../Component/CustomHeader'
import { appColors } from '../../Utils/appColors'
import Styles from '../../Utils/Styles'

const UploadStory = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <Container >
            <CustomHeader title={'Write/Upload Story'} 
                onBackPress={()=>navigation.goBack()}
            />
            <TouchableOpacity activeOpacity={0.5}>
            <LinearGradient colors={['#ed9456','#de5212']} start={{x:1,y:1}} end={{x:1,y:0.8}}
            style={[styles.btn,Styles.fd]}>
                <CloudUpload fill={appColors.white} height={60} width={60} />
                <Text style={styles.btnTitle}>Upload PDF</Text>
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} 
            onPress={()=>navigation.navigate('WriteBook')}>
                <LinearGradient 
                    colors={['#f99912','#ffd06c'
                    ]} start={{x:0.4,y:0.9}} 
                    end={{x:0.9,y:0.4}}
                    style={[styles.btn,Styles.fd]}>
                    <PenIcon fill={appColors.white} height={40} width={40} />
                    <Text style={styles.btnTitle}>Create Chapter</Text>
                </LinearGradient>
                </TouchableOpacity>
            </Container>
        </View>
    )
}

export default UploadStory

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        margin:20,
        borderBottomColor:appColors.black,
        borderBottomWidth:0.5,
        paddingBottom:5,
        textAlign:'center',
    },
    btn:{
        height:100,
        borderRadius:10,
        padding:20,
        justifyContent:'space-around',
        marginBottom:20
    },
    btnTitle:{
        fontSize:16,
        fontWeight:'700',
        color:appColors.white
    }
})
