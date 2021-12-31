import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { zIndex } from 'styled-system'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'
const{width}=Dimensions.get('window')

const OffersComp = ({discount,price,coins,additionalCoins}) => {
    return (
       <View style={styles.main}>
           <ImageBackground source={getIcon('offer')}
                style={{marginTop:-25,height:60,width:60,justifyContent:'center',alignItems:'center'}}
           >
               <Text style={{color:appColors.blue}}>+35%</Text>
           </ImageBackground>
           <View style={styles.innerView}>
                <Image
                    source={getIcon('fGold')}
                    style={{height:30,width:30}}
                />
                <Text style={styles.coins}>250</Text>
           </View>
                <Text style={styles.extra}>+20</Text>
            <View style={styles.bottom}>
                <Text style={styles.price}>
                    USD 4.99
                </Text>
            </View>
       </View>
    )
}

export default OffersComp

const styles = StyleSheet.create({
    main:{
        backgroundColor:appColors.blue,
        margin:5,
        marginTop:30,
        borderRadius:10,
        height:110,
        width:110
    },
    bottom:{
        backgroundColor:appColors.golden,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:10
    },
    innerView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    coins:{
        fontSize:20,
        left:10,
        color:appColors.white,
        fontWeight:'700',
    },
    extra:{
        fontSize:14,
        textAlign:'center',
        color:appColors.golden,
        fontWeight:'700'
    },
    price:{
        color:appColors.blue,
        fontWeight:'600',
        textAlign:'center',
        fontSize:16
    }
})
