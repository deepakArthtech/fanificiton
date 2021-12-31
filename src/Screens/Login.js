import React from "react";
import {View, Text, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native";
import { Button, TextInput as MaterialTextInput} from 'react-native-paper';
import { SafeAreaView } from "react-navigation";
import 'react-native-gesture-handler';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableHighlight } from "react-native-gesture-handler";
import COLORS from "../color/Colors";
import style from "../styles/style";
 
 


function Login({navigation}){
    return (
        <SafeAreaView style={{paddingHorizontal:20, flex:1, backgroundColor:COLORS.white}}>

          <ScrollView>
          <View style={{marginTop:100, alignSelf:'center'}}>
            <Text style={{fontWeight:'bold', fontSize: 26, color:COLORS.black, fontFamily:'Montserrat-Bold'}}>Hello!</Text>
          
          </View>

          <MaterialTextInput label={'E-mail'} activeOutlineColor="#640000" placeholder="Enter your E-mail" mode="outlined" style={{width:'100%', marginTop:20}}></MaterialTextInput>

          <View style={{ marginTop:20,   flex:1, flexDirection:'row'}}>
          <MaterialTextInput style={{flex:1}} label={'Password'}  secureTextEntry={true}  activeOutlineColor="#640000" passwordRules="true" placeholder="Enter your Password" mode="outlined"></MaterialTextInput>
          </View>
         

          <Text style={{color:COLORS.chocklate, marginTop:10}}>Forgot password?</Text>
          <TouchableOpacity>
          <Text  style={style.text} onPress={()=>navigation.navigate('HomeScreen')}>Continue</Text>
            
          </TouchableOpacity>


          <View style={{flex:1, marginTop:20, flexDirection:'row'}}>
            <Text>Don't have an account?</Text> 
            <Text style={{marginLeft:10,  color:COLORS.chocklate }} onPress={()=> navigation.navigate('SignUp')}>Sign up</Text>
          </View>

          <View style={{marginVertical:20, flex:1, flexDirection:'row', alignItems:'center'}}>
               <View style={style.line}/>
               <Text style={{marginHorizontal:16}}>OR</Text>
               <View style={style.line}/>
          </View>

        <TouchableOpacity>

        <View style={style.btnsoical}>
            <Image style={{width:20, height:20}} source={require("../assests/icons/facebook.png")}/>
            <Text style={{marginLeft:16,color:COLORS.black}}>Continue with Facebook</Text>
          </View>

        </TouchableOpacity>

          <TouchableOpacity>
          <View style={style.btnsoical}>
            <Image style={{width:20, height:20}} source={require("../assests/icons/google.png")}/>
            <Text style={{marginLeft:16,color:COLORS.black}}>Continue with Google</Text>
          </View>
          </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
        
      );
}

export default Login;