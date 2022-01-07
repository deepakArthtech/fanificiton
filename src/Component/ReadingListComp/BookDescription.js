import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View,Image, TextInput } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../color/Colors';
 
 

 


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const BookDescription = () => {

  return(
    
          <View style={{padding:20, flex:1, backgroundColor:COLORS.white}}>
            
         <Text>Hello</Text>
      </View>
       
      
 )
  }   
  export default BookDescription