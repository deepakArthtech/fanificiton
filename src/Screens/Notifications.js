import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Container from '../Component/Container'
import CustomHeader from '../Component/CustomHeader'
import { appColors } from '../Utils/appColors'
import { getIcon } from '../Utils/getIcon'
import Styles from '../Utils/Styles'

const Notifications = () => {
    return (
        <View style={Styles.container}>
           <Container>
                <CustomHeader
                />
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image
                        source={getIcon('face')}
                        style={{height:300,width:300,
                        alignItems:'flex-end',justifyContent:'flex-end',}}
                    />
                <View>
                    <Text style={styles.txt}>
                        No Notifications!
                    </Text>
                    <Text
                    style={[styles.txt,{fontWeight:'normal',lineHeight:30,color:appColors.borderColor}]}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </View>
                </View>
           </Container>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    zeroView:{
        height:40,
        width:40,
        backgroundColor:appColors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    txt:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'700',
        marginBottom:10
    }
})
