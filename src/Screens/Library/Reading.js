import React from 'react'
import {Image, TextInput, View,StyleSheet,Text,FlatList,Dimensions, TouchableOpacity} from 'react-native'
import COLORS from '../../color/Colors';
import { ProgressBar} from 'react-native-paper';
const data = [
    {id:1,title:"Harry Porter",author:"J.K Rowling" },
    {id:2,title:"Harry Porter",author:"J.K Rowling" },
    {id:3,title:"Harry Porter",author:"J.K Rowling" },
    {id:4,title:"Harry Porter",author:"J.K Rowling" }
]


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Reading  ({navi})  {
    return (
        <View>
                 <FlatList
                     horizontal
                     showsHorizontalScrollIndicator ={false}
                     data={data}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=>(
                        <View style={{marginTop:16, marginRight:16}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('BookDescription')}>
                            <Image source={require('../../asserts/harry_porter.png')} style={styles.imageStyle}/>
                            </TouchableOpacity>
                            <Text  style={{fontWeight:'600', marginTop:8}}>{item.title}</Text>
                             <Text>{item.author}</Text>
                             <ProgressBar style={{marginTop:6, borderRadius:4, height:6}} progress={0.5} color="#640000" />
                         </View>
                     )}> 

                 </FlatList>
               
           </View>
       
    )
}

const styles= StyleSheet.create({
    imageStyle: {
        height:windowHeight/4,
        width:windowHeight/6.5,
        borderRadius:10

    }
})

export default Reading
