import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { color, height } from 'styled-system'
import CloudUpload from '../../asserts/svgIcons/CloudUpload'
import Container from '../../Component/Container'
import CustomButton from '../../Component/CustomButton'
import CustomHeader from '../../Component/CustomHeader'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'

const UploadCover = ({onUploadCover,navigation}) => {
    return (
        <View style={{flex:1}}>
            <CustomHeader
                onBackPress={()=>navigation.goBack()}
            />
            <Container isScrollable>
            <TouchableOpacity style={styles.imgView} onPress={onUploadCover}>
              <CloudUpload 
                    height={120}
                    
                    width={120} 
                    fill={appColors.black} 
                    />
              <Text style={[styles.title,{fontWeight:'700'}]}>Upload Cover</Text>
            </TouchableOpacity>
            <TextInput
                placeholder={'Title'}
                style={styles.title}
                placeholderTextColor={appColors.black}
                
                />
            <TextInput
                style={styles.input}
                placeholderTextColor={appColors.black}
                placeholder={'Synopsis'}
                textAlignVertical='top'
                multiline={true}
                maxLength={2000}
                />
            <Text style={styles.maxChar}>2000 Characters</Text>

            <CustomButton
                onPress={()=>navigation.navigate('UploadStory')}
                containerStyle={{backgroundColor:appColors.primary,marginTop:20,
                    height:35,width:'80%',alignSelf:'center'}}
                    title={'Next'}
                    />
                    </Container>
        </View>
    )
}

export default UploadCover

const styles = StyleSheet.create({
    imgView:{
        height:250,
        width:'100%',
        backgroundColor:'#0001',
        justifyContent:'center',
        alignItems:'center'
    },
    cover:{

    },
    input:{
        height:250,
        borderColor:appColors.borderColor,
        borderWidth:1,
        marginTop:10,
        padding:10,
        borderRadius:5
    },
    title:{
        fontSize:18,
        margin:10,
        borderBottomColor:appColors.black,
        borderBottomWidth:0.5,
        paddingBottom:5,
    },
    maxChar:{
        textAlign:'right',
        color:appColors.titleColor,
        fontSize:14
    }
})
