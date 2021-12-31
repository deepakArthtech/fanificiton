import React from 'react';
import {View,Text,StyleSheet,Dimensions,ScrollView} from 'react-native'
import RoundImage from '../Component/RoundImage';
import { appColors } from "../Utils/appColors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile({ navigation }){
    return(
        
        <View style={styles.topContainer}>
            <ScrollView>
            {/* <BackButton/> */}
            <View style={styles.roundImageView}>
                <RoundImage/>
                <Text style={{fontSize:24,marginVertical:20,fontWeight:'bold'}}> John Doe</Text>
                <View style={{flexDirection:'row'}}>
                     <View style={{alignItems:'center',flex:1}}>
                         <Text style={{marginVertical:10,fontWeight:'bold'}}>2</Text>
                         <Text> Reading List</Text>
                     </View>
                     <View style={{alignItems:'center',flex:1}}>
                         <Text style={{marginVertical:10,fontWeight:'bold'}}>346</Text>
                         <Text> Coins </Text>
                     </View>
                     <View style={{alignItems:'center',flex:1}}>
                         <Text style={{marginVertical:10,fontWeight:'bold'}}>3M</Text>
                         <Text> view</Text>
                     </View>
                </View>
                <Text onPress={()=>navigation.navigate('TopUp')} style={styles.button_style}>
                    Top Up
                </Text>
                <Text style={{fontSize:20,fontWeight:'bold',width:windowWidth-40}}>About</Text>
                <Text style={{marginHorizontal:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
               <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',
            width:'80%'}}>
               <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>Interest</Text>
               <Text onPress={()=>navigation.navigate('ChangeIntrest')} style={{fontSize:14,marginTop:10,
            padding:5,height:30,}}>Change</Text>
               </View>
            </View>
            <View style={{flexDirection:'row',flexWrap: "wrap"}}>
                <Text style={{marginVertical:5,borderRadius:20,paddingVertical:8,paddingHorizontal:15,color:'white',backgroundColor:'#8080ff',marginLeft:10}}>Non Fiction</Text>
                <Text style={{marginVertical:5,borderRadius:20,paddingVertical:8,paddingHorizontal:15,color:'white',backgroundColor:'#ff3300',marginLeft:10}}>Fantasy</Text>
                <Text style={{borderRadius:20,marginVertical:5,paddingVertical:8,paddingHorizontal:15,color:'white',backgroundColor:'#ff9966',marginLeft:10}}>Romance</Text>
                <Text style={{borderRadius:20,marginVertical:5,paddingVertical:8,paddingHorizontal:15,color:'white',backgroundColor:'#8080ff',marginLeft:10}}>Art</Text>
                <Text style={{borderRadius:20,marginVertical:5,paddingVertical:8,paddingHorizontal:15,color:'white',backgroundColor:'#ff9966',marginLeft:10}}>Crime</Text>
                <Text style={{borderRadius:20,marginVertical:5,paddingVertical:8,paddingHorizontal:15,color:'white',backgroundColor:'#8080ff',marginLeft:10}}>Others</Text>
            </View>
            </ScrollView>
        </View>
      
    )
}

const styles = StyleSheet.create({
    topContainer:{
        flex:1,
    },
    roundImageView:{
        justifyContent:'center',
        alignItems:'center'
    },
    button_style:{
        backgroundColor:'#640000',
        width:windowWidth-80,
        paddingVertical:10,
        color:'white',
        textAlign:'center',
        borderRadius:25,
        marginVertical:20

    }
})

export default Profile;