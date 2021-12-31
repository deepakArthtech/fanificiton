import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'

const CustomButton = ({title,onPress,containerStyle,txtStyle,icon}) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.btn,containerStyle]}>
          {
              icon&&
                <Image
                    source={getIcon(icon)}
                    style={{height:20,width:20}}
                    resizeMode='contain'
                />
          }
          <Text style={[styles.title,txtStyle]}>{title}</Text>
      </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        textAlign:'center',
        borderRadius:2,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    title:{
        color:appColors.white,
        fontSize:18,
        fontWeight:'500'
    }
});
