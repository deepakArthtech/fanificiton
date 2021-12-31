import React from 'react'
import {Image, TextInput, View,StyleSheet,Text,FlatList,Dimensions} from 'react-native'
const data = [
    {id:1,title:"Harry Porter",author:"J.K Rowling" },
    {id:2,title:"Harry Porter",author:"J.K Rowling" },
    {id:3,title:"Harry Porter",author:"J.K Rowling" },
    {id:4,title:"Harry Porter",author:"J.K Rowling" }
]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Reading  ()  {
    return (
        <View style={{flex:1}}>
                 <FlatList
                     horizontal
                     data={data}
                     keyExtractor={item=>item.id}
                     renderItem={({item})=>(
                        <View style={{margin:10}}>
                             <Image source={require('../../asserts/harry_porter.png')} style={styles.imageStyle}/>
                            <Text>{item.title}</Text>
                             <Text>{item.author}</Text>
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
