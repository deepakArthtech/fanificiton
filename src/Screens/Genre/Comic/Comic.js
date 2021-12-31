import React from 'react'
import { Image,ScrollView, Text, View, StyleSheet, FlatList, Dimensions, StatusBar ,TouchableOpacity, SafeAreaView} from 'react-native'
import { appColors } from '../../../Utils/appColors';
import { data } from '../../../Utils/MokeData';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Comic = () => {
    return (
        <SafeAreaView style={styles.container}>  
        <View style={{backgroundColor:appColors.white,paddingTop:10}}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth:1,padding:5,borderBottomColor:appColors.borderColor,marginHorizontal:10,backgroundColor:appColors.white}}>
                        <Image source={require('../../../asserts/harry_porter.png')} style={styles.imageStyle} />
                        <View style={{ marginLeft: 10,width:'60%',}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                                <Text style={{ marginRight: 20, fontWeight: 'bold' }}>Coming</Text>
                                <Text>By Michelle Obama</Text>
                            </View>
                            <Text style={{ marginTop: 20,height:60 }}
                            >
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
        flex:1
      },
    imageStyle: {
        height: windowHeight / 3.5,
        width: windowHeight / 6.5,
        borderRadius: 10,



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



export default Comic
