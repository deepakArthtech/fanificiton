import {StyleSheet} from 'react-native'
import { borderRadius } from 'styled-system';
import COLORS from '../color/Colors';
 

export default StyleSheet.create({

container: {
    flex: 1,
    marginTop: 20
},
text: {
    padding: 16,
    borderColor: 'black',
    marginTop:20,
    textAlign:'center',
    color:COLORS.white,
    backgroundColor: COLORS.chocklate
 },
 line:{
     height:1,
     backgroundColor:COLORS.gray,
     flex:0.5,
 },
 btnsoical:{
     paddingVertical:16,    
     borderColor:COLORS.gray,
     marginTop:16,
     flexDirection:'row',
     paddingLeft:16,
     borderWidth:1,

 },

 arrowstyle:{
     width:20,
     height:20,
     marginRight:16
     
 },

 textInputStyle:{
    color:'black',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10 ,
    backgroundColor:'#F2F2F2',
    flex:1,
    borderRadius:24,
    height:40,
  },

  textheading:{
      color:COLORS.black,
     fontSize:18,
      fontWeight:'600',
      marginTop:24
  },

  imagestyle:{
width:100,
height:160,
borderRadius:4
  }

});