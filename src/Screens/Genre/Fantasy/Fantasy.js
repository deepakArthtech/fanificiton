import React from 'react'
import { Image, Text, View, StyleSheet, FlatList, Dimensions, StatusBar ,SafeAreaView, TouchableOpacity} from 'react-native'
import { IconButton } from 'react-native-paper';
import { flexShrink } from 'styled-system';
import COLORS from '../../../color/Colors';
import { appColors } from '../../../Utils/appColors';
import { data } from '../../../Utils/MokeData';
import { Rating, AirbnbRating } from 'react-native-ratings';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Fantasy = () => {
    return (
        <SafeAreaView style={styles.container}>  
                <View style={{backgroundColor:appColors.white }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth:1,padding:5,borderBottomColor:appColors.borderColor,marginHorizontal:10,backgroundColor:appColors.white}}>
                                <Image source={require('../../../asserts/harry_porter.png')} style={styles.imageStyle} />
                                <View style={{ marginLeft: 10,width:'60%',}}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                                        <Text style={{ marginRight: 20, fontWeight: 'bold' }}>Shoe Dog</Text>
                                        <Text>By Michelle Obama</Text>
                                    </View>

                                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:8}}>
                                    <Image source={require('../../../asserts/eye_red.png')} style={{width:16, height:16}}/>

                                    <Text > 4.5M</Text>

                                    <Rating type='star' readonly={true} ratingCount={5} imageSize={12} style={{marginHorizontal:8}}/>
 
                                    <Text > 4.5/5</Text>
                                    </View>
                                    <Text>
                                        An intimate, powerful, and inspiring
                                        memoir by the former First Lady of
                                        the United States, now a No.1 Sunday
                                        Times bestseller.
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}/>


                 </View>

                </SafeAreaView>  
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
        flex: 1,

    },

    container: {
        marginTop: StatusBar.currentHeight,
        flex:1,
        backgroundColor:appColors.white
      },
    imageStyle: {
        height: 160,
        width: windowHeight / 6.5,
        borderRadius: 4,



    },
    headerTextStyle: {
        paddingHorizontal: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        backgroundColor: '#C4C4C4',
        textAlign: 'center',
        borderRadius: 30,
        marginBottom: 5

    }
});



export default Fantasy

 