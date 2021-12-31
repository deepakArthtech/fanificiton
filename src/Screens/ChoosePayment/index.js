import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TickIcon from '../../asserts/svgIcons/TickIcon'
import Container from '../../Component/Container'
import CustomHeader from '../../Component/CustomHeader'
import OffersComp from '../../Component/PaymentComp/OffersComp'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'
import Styles from '../../Utils/Styles'

const TopUp = ({navigation}) => {
    return (
        <View style={[Styles.container]}>
            <Container isScrollable>
                <CustomHeader title={'Top Up'}
                onBackPress={()=>navigation.goBack()}
                />
                <Text style={styles.choose}>
                    Choose payment  Method
                </Text>
                <View style={styles.stripeBtnView}>
                    <TickIcon size={20} 
                    fill={'#566DDE'} />
                    <Text style={styles.stripe}>stripe</Text>
                </View>
                <Text style={styles.topUpTxt}>Top Up</Text>
                <SafeAreaView style={{flex:1}}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{justifyContent:'center',
                    alignItems:'center',}}
                    nestedScrollEnabled={true}
                    data={[1,2,3,4,5,6]}
                    renderItem={({item})=><OffersComp/>}
                />
                </SafeAreaView>
                <View style={{marginTop:20}}>
                    <Text style={styles.txt1}>
                        Purchase Coins don't expire, and are non-transferrable.
                    </Text>
                    <Text style={styles.txt2}>More Events</Text>
                    <View style={styles.GoldenBox}>
                        <View style={styles.bottomBox}>
                            <Text style={[styles.extended]}>
                                EXTENDED MEMBERSHIP
                            </Text>
                            <Text style={styles.coinsAmount}>500 <Text 
                            style={[styles.extended]}> COINS IN VALUE</Text></Text>
                            <View style={[{marginTop:10,marginBottom:10,},
                                Styles.fd]}>
                                <Image
                                    source={getIcon('fGold')}
                                    />
                                <Text style={styles.bottomBoxTxt}>
                                    Obtain 500 coins at once
                                </Text>
                            </View>
                            <View style={[{marginTop:10,marginBottom:10,},
                                Styles.fd]}>
                                <Image
                                    source={getIcon('fGold')}
                                    />
                                <Text style={styles.bottomBoxTxt}>
                                    Earn an additional 180 coins a Month (from daily Login)
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.price}> USD 4.99 / Month</Text>
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default TopUp

const styles = StyleSheet.create({
    choose:{
        fontSize:18,
        fontWeight:'600',
        marginTop:10,
        marginBottom:10
    },
    stripeBtnView:{
        height:30,
        width:80,
        backgroundColor:appColors.lightGray,
        borderRadius:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:5
    },
    stripe:{
        color:'#566DDE',
        fontSize:14,
        fontWeight:'800'
    },
    topUpTxt:{
        fontSize:18,
        marginTop:10,
        marginBottom:10
    },
    bottomBox:{
        backgroundColor:appColors.blue,
        borderRadius:10,
        padding:20
    },
    txt1:{
        fontSize:18,
        letterSpacing:0.5,
        lineHeight:22,
        marginBottom:10
    },
    txt2:{
        fontSize:18,
        fontWeight:'700',
        letterSpacing:0.5,
        marginBottom:10
    },
    bottomBoxTxt:{
        left:20,
        color:appColors.borderColor,
        fontSize:16
    },
    GoldenBox:{
        backgroundColor:appColors.golden,
        overflow:'hidden',
        borderRadius:10,
        marginBottom:20
    },
    price:{
        fontSize:18,
        textAlign:'center',
        lineHeight:40,
        color:appColors.blue,
        fontWeight:'600'
    },
    extended:{
        fontSize:16,
        color:appColors.borderColor,
        fontWeight:'600',
        marginBottom:20
    },
    coinsAmount:{
        fontSize:24,
        fontWeight:'700',
        color:appColors.golden
    }
})
