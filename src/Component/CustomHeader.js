import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackIcon from '../asserts/svgIcons/BackIcon'
import { appColors } from '../Utils/appColors'

const CustomHeader = ({title,onBackPress,}) => {
    return (
        <View style={[styles.main]}>
            <TouchableOpacity onPress={onBackPress}>
                <BackIcon size={25} fill={appColors.black}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    main:{
        height:50,
        flexDirection:'row',
        alignItems:'center',

    },
    title:{
        fontSize:18,
        fontWeight:'600',
        letterSpacing:0.5,
        left:20
    }
})
