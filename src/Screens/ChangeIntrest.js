
import React, { useState } from 'react'
import { StyleSheet,  TouchableOpacity, View } from 'react-native'
import Container from '../Component/Container'
import CustomHeader from '../Component/CustomHeader'
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { appColors } from '../Utils/appColors'
import COLORS from '../color/Colors'
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton, Text } from 'react-native-paper';


var radioButtonsData = [
    {id:1,label: 'New', value: 0 ,  color:COLORS.chocklate,},
    {id:2,label: 'Ratings', value: 1 , color:COLORS.chocklate,  },
    {id:3,label: 'New', value: 2 , color:COLORS.chocklate,alignSelf:'flex-start'}];

  const interestList = ['Romance', 'Action', 'Mystery', 'War', 'Fantasy', 'Supernatural'];

const ChangeIntrest = ({navigation}) => {
 
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
      const [value, setValue] = React.useState('first');
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    return (
        <View style={{flex:1, padding:20}}>
            {/* <CustomHeader onBackPress={()=>navigation.goBack()}/> */}

            <Text style={{alignSelf:'flex-end', color:COLORS.black, fontSize:16, fontWeight:'600'}}>RESET</Text>
                <Text style={{fontWeight:'600'}}>Sort by</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
          <RadioButton value="first" color={COLORS.chocklate} />
          <Text style={{color:value==='first'?COLORS.black:COLORS.gray, fontWeight:'600'}}>New</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <RadioButton value="second" color={COLORS.chocklate} />
          <Text style={{color:value==='second'?COLORS.black:COLORS.gray, fontWeight:'600'}}>Rating</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <RadioButton value="third" color={COLORS.chocklate} />
          <Text style={{color:value==='third'?COLORS.black:COLORS.gray, fontWeight:'600'}}>New</Text>
          </View>
      </View>
    </RadioButton.Group>
                <View style={{borderTopColor:appColors.black,borderTopWidth:1,marginVertical:10}}/>
                    <Text style={{fontWeight:'600'}}>Refine by Tags</Text>

                    <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap',marginTop:20}}>
                        {
                             
                            interestList.map((ind)=>{
                                return(
                                    <TouchableOpacity key={ind} style={{ paddingHorizontal:16,paddingVertical:8,backgroundColor:'#f0e6e6',margin:5,alignItems:'center',justifyContent:'center',borderRadius:30,}}>
                                        <Text style={{color:COLORS.chocklate,fontWeight:'600'}}>{ind}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                
        
        </View>
    )
}

export default ChangeIntrest

const styles = StyleSheet.create({})
