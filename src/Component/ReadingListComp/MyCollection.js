import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View,Image, TextInput } from 'react-native'
import COLORS from '../../color/Colors';
import style from '../../styles/style';
 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const MyCollection = () => {

    return(
        <ScrollView style={{flex:1,padding:20}}>

            <View style={{flex:1}}>
                
            <View style={{flexDirection:'row', marginBottom:8}}>
                
                <View style={{flexDirection:'row',flex:1}}>
                 <Image style= {{width:97, shadowOpacity:1 ,marginRight:8, elevation:8, height:146, borderRadius:4}} source={require('../../assests/icons/harry_porter.png')}/>
                 <View>
                 <Text style={{  fontWeight:'700', fontSize:18}}>My Collection</Text>
                 <Text style={{fontWeight:'600', fontSize:12}}>Author: John Doe</Text>
                 <Text style={{fontWeight:'600', fontSize:12}}>List Description</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum venenatis id elementum vitae odio fringilla interdum pellentesque. </Text>
                 </View>
                
     
                 </View>
     
                 <View style={{flexDirection:'row'}}>
                     <Image style= {{width:12, height:12, marginRight:8, top:4}} source={require('../../asserts/share_icon.png')}/>
     
                     <Text style={{color:COLORS.chocklate, fontWeight:'600', justifyContent:'flex-end'}} >Share</Text>
     
                 </View>
     
     
                 </View>
                 <View style={style.line}/>

                 <View style={{justifyContent:'space-between', flexDirection:'row', marginVertical:16}}>
                     <View>

                         <Text style={{color:COLORS.gray}}>Books</Text>
                         <Text style={{fontWeight:'600', fontSize:26, alignSelf:'center'}}>0</Text>

                     </View>

                     <View>

                         <Text style={{color:COLORS.gray}}>Views</Text>
                         <Text style={{fontWeight:'600', fontSize:26, alignSelf:'center'}}>10</Text>

                     </View>

                     <View>

                         <Text style={{color:COLORS.gray}}>Followers</Text>
                         <Text style={{fontWeight:'600', fontSize:26, alignSelf:'center'}}>440</Text>

                     </View>
                 </View>

                 <View style={style.line}/>

                 <Image style={{alignSelf:'center', marginTop:32}} source={require('../../assests/icons/logo_collection.png')}/>

                 <Text style={{fontWeight:'700', marginTop:8, fontSize:18, alignSelf:'center'}}>Your list is empty</Text>

                 <Text style={{fontWeight:'600', marginTop:16,paddingHorizontal:24, paddingVertical:10, backgroundColor:COLORS.chocklate, color:COLORS.white,borderRadius:24, fontSize:14, alignSelf:'center'}}>Add Books</Text>

            </View>

        
            
        </ScrollView>
    )

} 
export default MyCollection