
import React from 'react'
import { View, StyleSheet, Image, Text, TextInput, Dimensions } from 'react-native'
import DiscoverNavigation from '../Routes/HeaderNavigation/DiscoverNavigation'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Discover = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 20 }}>
                <View style={styles.textInputStyle}>
                    <Image source={require('../asserts/search_icon.png')} />
                    <TextInput placeholder="Search For Novel" style={{ flex: 1, marginLeft: 10 }} />
                </View>
                <Image source={require('../asserts/gift.png')} style={{ marginTop: 30, marginLeft: 5 }} />
                <Image source={require('../asserts/filter2.png')} style={{ marginTop: 30, marginLeft: 5 }} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20 }}>



            </View>
            <DiscoverNavigation navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
    textInputStyle: {
        marginTop: 30,
        borderColor: 'grey',
        color: 'black',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#F2F2F2',
        flex: 1
    },
    imageStyle: {
        height: windowHeight / 3,
        width: windowWidth / 3,
        borderRadius: 10
    }
});
export default Discover