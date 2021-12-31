import {StyleSheet} from 'react-native'
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

 }
});