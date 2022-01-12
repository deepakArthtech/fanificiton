import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { justifyContent, system } from 'styled-system'
import CrossIcon from '../../asserts/svgIcons/CrossIcon'
import Container from '../../Component/Container'
import CustomHeader from '../../Component/CustomHeader'
import { appColors } from '../../Utils/appColors'
import { getIcon } from '../../Utils/getIcon'
import Styles from '../../Utils/Styles'

const Dashboard = ({navigation}) => {
    return (
        <View style={Styles.container}>
           <Container>
               <View style={[{height:60},Styles.fd,{justifyContent:'space-between'}]}>
                    <Text style={{fontSize:22,  fontWeight:'700'}}>
                        Menu
                    </Text>
                    <CrossIcon
                        size={20}
                        fill={appColors.black}
                    />
               </View>
               <View style={[Styles.fd,{justifyContent:'space-between'}]}>
                    <TouchableOpacity style={styles.gift}>
                        <Image
                            source={getIcon('giftIcon')}
                            style={{height:40,width:40}}
                            resizeMode='contain'
                        />
                        <Text style={styles.text}>Earn Rewards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gift}>
                        <Image
                            source={getIcon('pen')}
                            style={{height:40,width:40}}
                            resizeMode='contain'
                        />
                        <Text style={styles.text}>Publish Story</Text>
                    </TouchableOpacity>
               </View>
               <View style={[Styles.fd,{justifyContent:'space-between'}]}>
                    <TouchableOpacity style={styles.gift}>
                        <Image
                                source={getIcon('messages')}
                                style={{height:40,width:40}}
                                resizeMode='contain'
                        />
                        <Text style={styles.text}>Earn Rewards</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={[styles.smallView,{width:'90%'}]} onPress={()=>navigation.navigate('Notifications')}>
                            <Image
                                source={getIcon('bell')}
                                style={{height:40,width:40}}
                                resizeMode='contain'
                            />
                            <Text style={styles.text}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.smallView,Styles.fd,{width:'90%'}]}>
                            <Image
                                source={getIcon('admin')}
                                style={{height:40,width:40}}
                                resizeMode='contain'
                            />
                            <Text style={styles.text}>My Profile</Text>
                        </TouchableOpacity>
                    </View>
               </View>
                    <View style={[Styles.fd,{justifyContent:'space-between'}]}>
                        <TouchableOpacity 
                        style={[styles.smallView,Styles.fd]}>
                            <Image
                                source={getIcon('settings')}
                                style={{height:40,width:40}}
                                resizeMode='contain'
                            />
                            <Text style={styles.text}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.smallView,Styles.fd]}>
                            <Image
                                source={getIcon('call')}
                                style={{height:40,width:40}}
                                resizeMode='contain'
                            />
                            <Text style={styles.text}>Support</Text>
                        </TouchableOpacity>
                    </View>
           </Container>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    gift:{
        backgroundColor:'#f5f5f5',
        width:'45%',
        height:150,
        borderRadius:10,
        padding:20,
        justifyContent:'space-between',
        margin:10
    },
    text:{
        fontSize:16,
        fontWeight:'600'
    },
    smallView:{
        height:70,
        backgroundColor:'#f5f5f5',
        padding:5,
        margin:10,
        borderRadius:10,
        width:"45%"
    }
})
