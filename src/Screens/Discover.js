
import React from 'react'
import { View, StyleSheet, Image, Text, TextInput, Dimensions } from 'react-native'
import COLORS from '../color/Colors';
import DiscoverNavigation from '../Routes/HeaderNavigation/DiscoverNavigation'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Discover = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor:COLORS.white }}>
            <View style ={{flexDirection:'row', alignContent:'center', alignItems:'center', marginTop:30, marginHorizontal:16}}>
                <View  style={styles.textInputStyle}>
                    <Image source={require('../asserts/search_icon.png')} />
                    <TextInput placeholder="Search for novel" style={{ flex: 1, marginLeft: 10 }} />
                </View>
                <Image source={require('../assests/icons/gift.png')} style={{ marginLeft: 16 , width:26, height:26}} />
                <Image source={require('../assests/icons/filter.png')} style={{marginLeft: 8 , marginTop:8, width:26, height:30}} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20 }}>



            </View>
            <DiscoverNavigation navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
    textInputStyle:{
        color:'black',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10 ,
        backgroundColor:'#F2F2F2',
        flex:1,
        borderRadius:24,
        height:40,
      },
    imageStyle: {
        height: windowHeight / 3,
        width: windowWidth / 3,
        borderRadius: 10
    }
});
export default Discover