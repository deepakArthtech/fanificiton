import React from 'react'
import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { appColors } from '../../Utils/appColors'


const Container = ({children,isScrollable,title,noPadding}) => {
    return (
        <SafeAreaView style={{flex:1}}>
                {
                    isScrollable?
                    <ScrollView 
                    nestedScrollEnabled={true} 
                    style={{
                        padding:noPadding?0:20,backgroundColor:appColors.white}} showsVerticalScrollIndicator={false}>
                    {children}
                    </ScrollView>
                    :
                    <View style={{flex:1,padding:
                        noPadding?0:20,backgroundColor:appColors.white}}>
                        {children}
                    </View>
                }
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({})