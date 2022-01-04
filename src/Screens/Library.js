import React from 'react';
import {Image, TextInput, View,StyleSheet,Text,FlatList,Dimensions} from 'react-native'

import LibraryNavigation from '../Routes/HeaderNavigation/LibraryNavigation';
import style from '../styles/style';
import { appColors } from '../Utils/appColors';



const data = [
    {id:1,title:"Harry Porter",author:"J.K Rowling" },
    {id:2,title:"Harry Porter",author:"J.K Rowling" },
    {id:3,title:"Harry Porter",author:"J.K Rowling" },
    {id:4,title:"Harry Porter",author:"J.K Rowling" }
]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen(){
    return(
        <View style={{flex:1,backgroundColor:appColors.white}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start', marginHorizontal:20}}>
            <View style={style.textInputStyle}>
                <Image source = {require('../asserts/search_icon.png')} />
                <TextInput placeholder="Search For Novel" style={{flex:1,marginLeft:10}}/>
            </View>

            </View>
            
            <LibraryNavigation />
        </View>
    )
}

const styles = StyleSheet.create({
    
      imageStyle:{
          height:windowHeight/3,
          width:windowWidth/3,
          borderRadius:10
      }
});

export default HomeScreen;



// import React, { useState } from 'react';
// import { Image, TextInput, View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';



// // const data = [
// //     {id:1,title:"Harry Porter",author:"J.K Rowling" },
// //     {id:2,title:"Harry Porter",author:"J.K Rowling" },
// //     {id:3,title:"Harry Porter",author:"J.K Rowling" },
// //     {id:4,title:"Harry Porter",author:"J.K Rowling" }
// // ]
// // const windowWidth = Dimensions.get('window').width;
// // const windowHeight = Dimensions.get('window').height;

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// function HomeScreen() {

//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 20 }}>
//                 <View style={styles.textInputStyle}>
//                     <Image source={require('../../asserts/search_icon.png')} />
//                     <TextInput placeholder="Search For Novel" style={{ flex: 1, marginLeft: 10 }} />
//                 </View>

                

//             </View>
           
//         </View> 
//           )
//         }  

       

//             {/* <View>
//                 <FlatList
//                 showsVerticalScrollIndicator ={false}
//                 showsHorizontalScrollIndicator={false}
//                 horizontal
//                     data={data}
//                     keyExtractor={item=>item.id}
//                     renderItem={({item})=>(
//                         <View style={{margin:10}}>
//                             <Image source={require('../../asserts/harry_porter.png')} style={styles.imageStyle}/>
//                             <Text>{item.title}</Text>
//                             <Text>{item.author}</Text>
//                         </View>
//                     )}> 

//                 </FlatList>
               
//             </View> */}


  
// const styles = StyleSheet.create({
//     textInputStyle:{
//         marginTop:15,
//         borderColor:'grey',
//         color:'black',
//         borderRadius:20,
//         flexDirection:'row',        
//         paddingHorizontal:8,
//         backgroundColor:'#F2F2F2',
//         flex:1
//       },
//     //   imageStyle:{
//     //       height:windowHeight/4,
//     //       width:windowHeight/6.5,
//     //       borderRadius:10
//     //   },
//     //   textSelected:{
//     //     fontWeight:'bold',
//     //     fontSize:16,
//     //     color:'#640000',
//     //     textDecorationLine:'underline'
//     //   },
//     //   textDeselected:{
//     //     fontWeight:'bold',
//     //     fontSize:16,
//     //     color:'black',
//     //   }

// });

// export default HomeScreen;
