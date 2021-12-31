import React from 'react';
import { ScrollView, Text } from 'react-native'
import { Image, TextInput, View, StyleSheet, FlatList, Dimensions } from 'react-native'

import { NativeBaseProvider } from 'native-base';

const data = [
    { id: 1, title: "Harry Porter", author: "J.K Rowling" },
    { id: 2, title: "Harry Porter", author: "J.K Rowling" },
    { id: 3, title: "Harry Porter", author: "J.K Rowling" },
    { id: 4, title: "Harry Porter", author: "J.K Rowling" }
]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Featured() {
    return (
        <NativeBaseProvider>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
               
                <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20 }}>


            
                </View>
                <View style={{ borderColor: '#e6e6e6', marginVertical: 10, borderWidth: 1, marginHorizontal: 20 }}></View>
                <Text style={{ color: '#640000', fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop: 15 }}> Trending </Text>
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={{ margin: 10 }}>
                                <Image source={require('../../../asserts/harry_porter.png')} style={styles.imageStyle} />
                            </View>
                        )}>

                    </FlatList>

                </View>

                <View style={{ borderColor: '#e6e6e6', marginVertical: 10, borderWidth: 1, marginHorizontal: 20 }}></View>
                <Text style={{ color: '#640000', fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop: 15 }}>Top Romance </Text>

                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={{ margin: 10 }}>
                                <Image source={require('../../../asserts/harry_porter.png')} style={styles.imageStyle} />
                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                <Text>{item.author}</Text>
                            </View>
                        )}>

                    </FlatList>
                </View>
                <View style={{ borderColor: '#e6e6e6', marginVertical: 10, borderWidth: 1, marginHorizontal: 20 }}></View>

                <Text style={{ color: '#640000', fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop: 15 }}> Top Biography </Text>

                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={{ margin: 10 }}>
                                <Image source={require('../../../asserts/harry_porter.png')} style={styles.imageStyle} />
                                {/* <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                            <Text>{item.author}</Text> */}
                            </View>
                        )}>

                    </FlatList>
                </View>

            </View>
        </ScrollView>
        </NativeBaseProvider>
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

export default Featured;


