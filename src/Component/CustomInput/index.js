import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { borderColor, height } from 'styled-system'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'
import Styles from '../../Utils/Styles'

const CustomInput = ({placeholder,onChangeText,icon,isFocused,onFocus,inputStyle,mt}) => {
    return (
        <View style={[styles.inputView,{borderColor:appColors.borderColor,marginTop:mt?mt:5}]}>
            <TextInput
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onFocus={onFocus}
            />
            {
                icon &&
                    <Image
                        source={getIcon(icon)}
                        style={styles.icon}

                    />
            }
        </View>
    )
}
// {borderColor:isFocused?appColors.primary:appColors.borderColor}
export default CustomInput

const styles = StyleSheet.create({
    inputView:{
        backgroundColor:appColors.white,
        height:50,
        width:'100%',
        borderWidth:1,
        borderRadius:5,
        overflow:'hidden',
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        width:'90%',
        height:30
    },
    icon:{
        height:25,
        width:25
    }
})
