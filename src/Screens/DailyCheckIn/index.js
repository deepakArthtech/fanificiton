import React from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { flex, marginTop } from 'styled-system'
import Container from '../../Component/Container'
import DailyTask from '../../Component/DailyRewardsComp/DailyTask'
import DayRewardComp from '../../Component/DailyRewardsComp/DayRewardComp'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'
import Styles from '../../Utils/Styles'

const DailyCheckIn = () => {
    return (
        <SafeAreaView style={[Styles.container]}>
            <View style={[Styles.container]}>
                <ImageBackground source={getIcon('rewards')} 
                style={{flex:1,padding:20}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View 
                    style={[styles.dailyRewardsView]}>
                        <View style={[Styles.fd,{justifyContent:'space-between'}]}>
                            {
                                [0,1,2,3,4,5,6].map((data,ind)=>{
                                    return <DayRewardComp key={ind}/>
                                })
                            }
                        </View>
                        <View style={{marginTop:10}}>
                            <TouchableOpacity 
                            style={styles.checkInBtn}>
                                <Text style={styles.checkInTxt}>Check In</Text>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                check In daily to earn +5 Coins
                            </Text>
                        </View>
                    </View>
                        {
                            [0,1,2,3,4,5,6].map((data,ind)=>{
                                return <DailyTask  
                                    key={ind}
                                />
                            })
                        }
                         </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default DailyCheckIn

const styles = StyleSheet.create({
    dailyRewardsView:{
        backgroundColor:appColors.white,
        borderRadius:20,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        padding:20,
        marginBottom:10
    },
    checkInBtn:{
        height:45,
        backgroundColor:'#e8e8e9',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    checkInTxt:{
        fontSize:18,
        fontWeight:'700',
        letterSpacing:0.5
    },
    txt:{
        color:appColors.primary,
        textAlign:'center',
        marginTop:10,
        fontSize:16,
        letterSpacing:0.5
    }
})
