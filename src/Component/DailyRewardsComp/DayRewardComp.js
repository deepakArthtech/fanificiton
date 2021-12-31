import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { appColors } from '../../Utils/appColors'

const DayRewardComp = () => {
    return (
        <TouchableOpacity style={styles.main}>
            <View style={[styles.badge]}>
                <Text style={[styles.points]}>+5</Text>
            </View>
            <Text>Mon</Text>
        </TouchableOpacity>
    )
}

export default DayRewardComp

const styles = StyleSheet.create({
    main:{
        alignItems:'center'
    },
    badge:{
        height:40,
        width:40,
        borderRadius:20,
        backgroundColor:appColors.golden,
        justifyContent:'center',
        alignItems:'center',
        margin:2
    },
    points:{
        fontSize:16,
        color:appColors.primary
    }
})
