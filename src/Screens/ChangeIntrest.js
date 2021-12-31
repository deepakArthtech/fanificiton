
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Container from '../Component/Container'
import CustomHeader from '../Component/CustomHeader'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { appColors } from '../Utils/appColors'

var radio_props = [
    {label: 'New', value: 0 },
    {label: 'Ratings', value: 1 },
    {label: 'New', value: 2 }
  ];

const ChangeIntrest = ({navigation}) => {
    const [value, setValue] = useState(0)
    return (
        <View style={{flex:1}}>
           <Container>
            <CustomHeader onBackPress={()=>navigation.goBack()}/>
                <Text>Sort by</Text>
                <RadioForm
                radio_props={radio_props}
                    initial={0}
                    onPress={(value) => setValue(value)}
                    style={{margin:20}}
                />
                <View style={{borderTopColor:appColors.black,borderTopWidth:1,padding:10}}>
                    <Text>Refine by Tags</Text>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginTop:20}}>
                        {
                            [0,1,2,3,4,5,6].map((ind)=>{
                                return(
                                    <TouchableOpacity key={ind} style={{height:40,width:100,backgroundColor:appColors.borderColor,margin:5,alignItems:'center',justifyContent:'center',borderRadius:30,}}>
                                        <Text style={{color:appColors.primary,fontWeight:'600'}}>Romance</Text>
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
