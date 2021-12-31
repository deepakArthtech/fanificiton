import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Container from '../Component/Container'
import CustomInput from '../Component/CustomInput'
import { appColors } from '../Utils/appColors'
import { getIcon } from '../Utils/getIcon'
import Styles from '../Utils/Styles'
import CountryPicker from 'react-native-country-picker-modal'
import { justifyContent } from 'styled-system'
import CustomButton from '../Component/CustomButton'

const Holdings = () => {

    const [country, setCountry] = useState('')

    return (
        <View style={Styles.container}>
            <Container>
            <View style={Styles.fd}>
                    <Image source={getIcon('back')}
                            style={{height:30,width:30}}
                            resizeMode='contain'
                    />
                    <Text style={{left:15,fontSize:18,fontWeight:'600'}}>
                        FanFiction Holdings
                    </Text>
               </View>
               <View style={{justifyContent:'center',alignItems:'center',height:100}}>
                   <Text style={styles.coins}>250 Coins</Text>
                   <Text style={styles.money}>$4.99</Text>
               </View>
               <View>
                   <Text style={styles.inputTitle}>Email</Text>
                   <CustomInput
                        placeholder={'Email'}
                   />
               </View>
               <View style={{marginTop:25}}>
                   <Text style={styles.inputTitle}>Card Information</Text>
                   <CustomInput
                        placeholder={'4242 4242 4242 4242'}
                   />
                   <View style={[Styles.fd,]}>
                        <TextInput 
                            style={styles.input}
                            placeholder={'MM/YY'}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder={'CVC'}/>
                   </View>
               </View>
               <View style={{marginTop:25}}>
                   <Text style={styles.inputTitle}>Name of card</Text>
                   <CustomInput
                        placeholder={'Email'}
                   />
               </View>
               <View style={{marginTop:25}}>
                   <Text style={styles.inputTitle}>
                       Country or Region
                   </Text>
                   <CountryPicker
                        containerButtonStyle={[styles.countrySelector]} 
                        onSelect={(e)=>setCountry(e.name)}
                        placeholder={<Text style={{
                            color:'gray',fontWeight:'700'
                        }}>{country}</Text>}
                    />

                    <CustomButton
                        containerStyle={{
                            backgroundColor:'#036bfc',
                            marginTop:50,height:40
                        }}
                        title={'Pay'}
                    />
               </View>
            </Container>
        </View>
    )
}

export default Holdings

const styles = StyleSheet.create({
    coins:{
        fontSize:16,
        color:appColors.titleColor,
        fontWeight:'700'
    },
    money:{
        fontSize:20,
        marginTop:5,
        color:appColors.black,
        fontWeight:'700'
    },
    inputTitle:{
        fontSize:14,
        color:'gray',//appColors.titleColor,
        fontWeight:'700'
    },
    input:{
        height:45,
        borderRadius:5,
        borderColor:appColors.borderColor,
        borderWidth:1,
        width:'50%',
        padding:10
    },
    countrySelector:{
        borderWidth:1,
        height:50,
        marginTop:5,
        borderColor:appColors.borderColor,
        borderRadius:5,
        padding:10,
        justifyContent:'center',
    }
})
