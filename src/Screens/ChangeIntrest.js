
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Container from '../Component/Container'
import CustomHeader from '../Component/CustomHeader'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { appColors } from '../Utils/appColors'
import COLORS from '../color/Colors'
import RadioGroup from 'react-native-radio-buttons-group';


var radioButtonsData = [
    {id:1,label: 'New', value: 0 },
    {id:1,label: 'Ratings', value: 1 },
    {id:1,label: 'New', value: 2 }
  ];

  const interestList = ['Romance', 'Action', 'Mystery', 'War', 'Fantasy', 'Supernatural'];

const ChangeIntrest = ({navigation}) => {
    const [value, setValue] = useState(0)
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    return (
        <View style={{flex:1}}>
           <Container>
            {/* <CustomHeader onBackPress={()=>navigation.goBack()}/> */}

            <Text style={{alignSelf:'flex-end', color:COLORS.black, fontSize:16}}>RESET</Text>
                <Text>Sort by</Text>
                <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} />
                <View style={{borderTopColor:appColors.black,borderTopWidth:1,padding:10}}>
                    <Text>Refine by Tags</Text>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginTop:20}}>
                        {
                             
                            interestList.map((ind)=>{
                                return(
                                    <TouchableOpacity key={ind} style={{height:40,width:100,backgroundColor:appColors.borderColor,margin:5,alignItems:'center',justifyContent:'center',borderRadius:30,}}>
                                        <Text style={{color:appColors.primary,fontWeight:'600'}}>{ind}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
           </Container>
        </View>
    )
}

export default ChangeIntrest

const styles = StyleSheet.create({})
