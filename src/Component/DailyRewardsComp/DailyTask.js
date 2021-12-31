import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { appColors } from '../../Utils/appColors'
import Styles from '../../Utils/Styles'

const DailyTask = () => {
    return (
        <View style={styles.main}>
            <Text style={[styles.task]}>Read for 15 minute 0/15</Text>
            <Text style={[styles.desc]}>Read on WebNovel for 15 Minutes</Text>
            <View style={[Styles.fd,{marginTop:40,justifyContent:'space-between'}]}>
                <View style={styles.coinsView}>
                    <Text style={styles.coinText}>
                        5 Coins
                    </Text>
                </View>
                <TouchableOpacity 
                style={[styles.claimBtn]}>
                    <Text style={[styles.claimBtnTxt]}>Claim</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DailyTask

const styles = StyleSheet.create({
    main:{
        padding:15,
        backgroundColor:'#f5f6f8',
        borderRadius:20,
        marginTop:15
    },
    coinsView:{
        height:20,
        width:80,
        backgroundColor:'#d17e6a',
        alignItems:'center',
        borderRadius:10,
    },
    coinText:{
        color:appColors.primary,
        fontSize:14
    },
    claimBtn:{
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:appColors.primary,
        height:40,
        width:120,
        borderRadius:20
    },
    claimBtnTxt:{
        color:appColors.white,
        fontSize:16,
        fontWeight:'600'
    },
    task:{
        fontSize:20,
        fontWeight:'500',
        letterSpacing:0.5,
        lineHeight:40
    },
    desc:{
        fontSize:16,
        color:appColors.titleColor
    }
})
