
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Container from '../Component/Container'
import CustomHeader from '../Component/CustomHeader'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { appColors } from '../Utils/appColors'
import COLORS from '../color/Colors'
import RadioGroup from 'react-native-radio-buttons-group';


var radioButtonsData = [
    {id:1,label: 'New', value: 0 ,  color:COLORS.chocklate,},
    {id:2,label: 'Ratings', value: 1 , color:COLORS.chocklate },
    {id:3,label: 'New', value: 2 , color:COLORS.chocklate,alignSelf:'flex-start'}];

  const interestList = ['Romance', 'Action', 'Mystery', 'War', 'Fantasy', 'Supernatural'];

const ChangeIntrest = ({navigation}) => {
    const [value, setValue] = useState(0)
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    return (
        <View style={{flex:1, padding:20}}>
            {/* <CustomHeader onBackPress={()=>navigation.goBack()}/> */}

            <Text style={{alignSelf:'flex-end', color:COLORS.black, fontSize:16, fontWeight:'600'}}>RESET</Text>
                <Text style={{fontWeight:'600'}}>Sort by</Text>
                 <View style={{alignSelf:'flex-start', marginTop:8}}>
                 <RadioGroup style={{alignItems:'start'}}
                radioButtons={radioButtons} 
                borderColor={COLORS.chocklate}
                onPress={onPressRadioButton} />
                 </View>
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
