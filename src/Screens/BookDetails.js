import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ClockIcon from '../asserts/svgIcons/ClockIcon'
import EyeIcon from '../asserts/svgIcons/EyeIcon'
import UserAvatar from '../asserts/svgIcons/UserAvatar'
import Container from '../Component/Container'
import CustomHeader from '../Component/CustomHeader'
import { appColors } from '../Utils/appColors'
import { getIcon } from '../Utils/getIcon'
import Styles from '../Utils/Styles'

const BookDetails = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <Container noPadding isScrollable>
               <CustomHeader
                    title={'How to Plot Romance Fiction'}
                    onBackPress={()=>navigation.goBack()}
               />
               
                    <ImageBackground 
                        source={{uri:'https://m.media-amazon.com/images/I/51tqKfXROIL.jpg'}}
                        resizeMode='cover'
                    style={styles.cover}>
                        <LinearGradient 
               colors={['#0009', '#0001',]}
               start={{x:1,y:0}}
                end={{x:0,y:1}}
               >
                        <View 
                        style={{padding:20}}>
                        <Text style={[styles.bookName]}>
                            How to Plot Romance Fiction
                        </Text>
                        <Text style={[styles.author]}>
                            By Nina Harrington
                        </Text>
                        <View style={[Styles.fd,{marginTop:10,
                                justifyContent:'space-between'}]}>
                                    <View 
                                    style={[Styles.fd,{justifyContent:'space-between'}]}>
                                    <EyeIcon height={20} width={20}
                                    fill={appColors.white} />
                                    <Text style={styles.txt}>
                                        4.5M
                                    </Text>
                                </View>
                                    <View 
                                    style={[Styles.fd,{justifyContent:'space-between'}]}>
                                    <ClockIcon height={20} width={20}
                                    fill={appColors.white} />
                                    <Text style={styles.txt}>
                                        SEPT.28.2021
                                    </Text>
                                </View>
                            <View 
                                    style={[Styles.fd,{justifyContent:'space-between'}]}>
                                    <UserAvatar height={20} width={20}
                                    fill={appColors.white} />
                                    <Text style={styles.txt}>
                                    Nina Harrington
                                    </Text>
                                </View>
                        </View>
                        </View>
               </LinearGradient>
                    </ImageBackground>
           <Text style={styles.details}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
           </Text>
            </Container>
        </View>
    )
}

export default BookDetails

const styles = StyleSheet.create({
   cover:{
       height:250,
       justifyContent:'flex-end',
    },
    bookName:{
        fontSize:24,
        fontWeight:'700',
        color:appColors.white
    },
    details:{
        color:appColors.titleColor,
        fontSize:16,
        lineHeight:23,
        letterSpacing:0.5,
        marginTop:15,
        paddingHorizontal:20
    },
    author:{
        fontSize:20,
        color:'rgb(255, 191, 0)',
        fontWeight:'700'
    },
    txt:{
        fontSize:14,
        color:appColors.white,
        left:5
    }
})
